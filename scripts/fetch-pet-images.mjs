import fs from "fs";
import path from "path";
import https from "https";

const OUT_DIR = path.join(process.cwd(), "public", "pets");
fs.mkdirSync(OUT_DIR, { recursive: true });

const dogs = [
  { slug: "bella", breed: "labrador" },
  { slug: "buddy", breed: "retriever/golden" },
  { slug: "coco", breed: "poodle/standard" },
  { slug: "cooper", breed: "beagle" },
  { slug: "daisy", breed: "shihtzu" },
  { slug: "luna", breed: "collie/border" },
  { slug: "max", breed: "germanshepherd" },
  { slug: "mochi", breed: "shiba" },
  { slug: "oreo", breed: "collie/border" },
  { slug: "pepper", breed: "dachshund" },
  { slug: "rocky", breed: "boxer" },
  { slug: "teddy", breed: "spaniel/brittany" }, 
];

const cats = [
  { slug: "chloe", breed_ids: "" }, 
  { slug: "cleo", breed_ids: "siam" }, 
  { slug: "leo", breed_ids: "" },
  { slug: "miso", breed_ids: "jbob" }, 
  { slug: "nala", breed_ids: "mcoo" }, 
  { slug: "salem", breed_ids: "" }, 
  { slug: "simba", breed_ids: "" },
];

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", reject);
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return download(res.headers.location, dest).then(resolve, reject);
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on("finish", () => file.close(resolve));
      })
      .on("error", reject);
  });
}

async function run() {
  for (const { slug, breed } of dogs) {
    try {
      const json = await fetchJson(`https://dog.ceo/api/breed/${breed}/images/random`);
      const url = json.message;
      const ext = path.extname(new URL(url).pathname) || ".jpg";
      const dest = path.join(OUT_DIR, `${slug}${ext}`);
      await download(url, dest);
      console.log(`✔ ${slug} -> ${path.basename(dest)}`);
    } catch (e) {
      console.error(`✘ ${slug} (${breed}) failed:`, e.message);
    }
  }

  for (const { slug, breed_ids } of cats) {
    try {
      const q = breed_ids ? `?breed_ids=${breed_ids}` : "";
      const json = await fetchJson(`https://api.thecatapi.com/v1/images/search${q}`);
      const url = json[0].url;
      const ext = path.extname(new URL(url).pathname) || ".jpg";
      const dest = path.join(OUT_DIR, `${slug}${ext}`);
      await download(url, dest);
      console.log(`✔ ${slug} -> ${path.basename(dest)}`);
    } catch (e) {
      console.error(`✘ ${slug} (cat) failed:`, e.message);
    }
  }

  console.log("\nDone. Check public/pets/, then update pets.js image paths to match the downloaded filenames.");
}

run();
const u = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&h=600&q=80`;

export const blogPosts = [
  { slug: "how-to-know-when-your-pet-needs-grooming", title: "How to Know When Your Pet Needs Grooming", excerpt: "Learn when it's time to bring your pet for grooming or do basic care at home.", date: "24 May 2026", image: u("1597603413826-cd1c06b05222") },
  { slug: "choosing-the-right-food-for-your-pet", title: "Choosing the Right Food for Your Pet", excerpt: "A simple guide to help you decide what food fits your pet's needs.", date: "24 May 2026", image: u("1632236568054-12f36ecee2f6") },
  { slug: "training-your-puppy-simple-commands-to-start-with", title: "Training Your Puppy: Simple Commands to Start With", excerpt: "Simple commands every dog should learn for better behavior and bonding.", date: "24 May 2026", image: u("1596928224632-d70a30394954") },
  { slug: "caring-for-your-pet-in-extreme-weather", title: "Caring for Your Pet in Extreme Weather", excerpt: "Easy tips to help your pet stay safe and comfortable during hot and cold weather.", date: "24 May 2026", image: u("1694447763457-4d5021c8e760") },
  { slug: "is-this-the-right-pet-for-you-to-adopt", title: "Is This the Right Pet for You to Adopt?", excerpt: "A quick guide to help you decide if a pet is the right fit for your lifestyle and home.", date: "24 May 2026", image: u("1522276498395-f4f68f7f8454") },
  { slug: "helping-your-pet-be-more-comfortable-around-others", title: "Helping Your Pet Be More Comfortable Around Others", excerpt: "Help your pet feel calm and safe around new people and other animals. 🐾", date: "24 May 2026", image: u("1551779891-b83901e1f8b3") },
  { slug: "helping-your-pet-settle-into-a-new-home", title: "Helping Your Pet Settle Into a New Home", excerpt: "Simple ways to make your pet feel safe and comfortable in a new environment.", date: "24 May 2026", image: u("1581888227599-779811939961") },
  { slug: "getting-to-know-your-pet-better", title: "Getting to Know Your Pet Better", excerpt: "Understand your pet's behavior and learn what they may be trying to communicate.", date: "24 May 2026", image: u("1552036354-d0ee14b417e0") },
  { slug: "making-healthy-treats-for-your-pet", title: "Making Healthy Treats for Your Pet", excerpt: "Simple homemade treats your pet can enjoy as part of a balanced diet.", date: "24 May 2026", image: u("1640652663796-764e4eb5bc59") },
  { slug: "before-you-travel-with-your-pet", title: "Before You Travel With Your Pet", excerpt: "Things to keep in mind to help your pet stay comfortable while traveling.", date: "24 May 2026", image: u("1712681355846-f81302e7886f") },
  { slug: "is-your-pet-trying-to-tell-you-something", title: "Is Your Pet Trying to Tell You Something?", excerpt: "Spot early signs of illness before it turns into a serious problem.", date: "24 May 2026", image: u("1513360371669-4adf3dd7dff8") },
  { slug: "common-household-items-that-can-be-toxic-to-pets", title: "Common Household Items That Can Be Toxic to Pets", excerpt: "Some foods and plants at home can harm pets. Learn what to avoid and what to do.", date: "24 May 2026", image: u("1631669969504-f35518bf96ba") },
];

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
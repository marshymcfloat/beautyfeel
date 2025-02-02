const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
async function connectDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/beautyfeelDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

connectDatabase();

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  branch: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Branch",
  },
  description: {
    type: String,
    required: true,
  },
});

const Service =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);

module.exports = Service;

const dummyServices = [
  // Services for Branch 1
  {
    title: "Basic Facial",
    price: 500,
    branch: new ObjectId("678a85f2ced7f732d6bfac45"),
    description: "A refreshing facial treatment suitable for all skin types.",
  },
  {
    title: "Anti-Aging Treatment",
    price: 1200,
    branch: new ObjectId("678a85f2ced7f732d6bfac45"),
    description: "A treatment to reduce wrinkles and fine lines.",
  },
  {
    title: "Acne Treatment",
    price: 800,
    branch: new ObjectId("678a85f2ced7f732d6bfac45"),
    description: "A specialized treatment for acne-prone skin.",
  },
  {
    title: "Whitening Facial",
    price: 1000,
    branch: new ObjectId("678a85f2ced7f732d6bfac45"),
    description: "Brighten your skin with our whitening facial treatment.",
  },
  {
    title: "Deep Cleansing Facial",
    price: 600,
    branch: new ObjectId("678a85f2ced7f732d6bfac45"),
    description: "A facial that deeply cleanses and detoxifies the skin.",
  },

  // Services for Branch 2
  {
    title: "Classic Eyelash Extensions",
    price: 1500,
    branch: new ObjectId("678a85f2ced7f732d6bfac46"),
    description: "Enhance your look with classic eyelash extensions.",
  },
  {
    title: "Volume Eyelash Extensions",
    price: 2000,
    branch: new ObjectId("678a85f2ced7f732d6bfac46"),
    description: "Get fuller lashes with our volume extensions.",
  },
  {
    title: "Eyelash Tinting",
    price: 700,
    branch: new ObjectId("678a85f2ced7f732d6bfac46"),
    description: "A quick tint for naturally darker lashes.",
  },
  {
    title: "Eyelash Lift",
    price: 1200,
    branch: new ObjectId("678a85f2ced7f732d6bfac46"),
    description: "A treatment to lift and curl your natural lashes.",
  },
  {
    title: "Lash Removal",
    price: 500,
    branch: new ObjectId("678a85f2ced7f732d6bfac46"),
    description: "Safe removal of eyelash extensions.",
  },

  // Services for Branch 3
  {
    title: "Manicure",
    price: 400,
    branch: new ObjectId("678a85f2ced7f732d6bfac47"),
    description: "Pamper your hands with our manicure service.",
  },
  {
    title: "Pedicure",
    price: 450,
    branch: new ObjectId("678a85f2ced7f732d6bfac47"),
    description: "Relax and rejuvenate with our pedicure service.",
  },
  {
    title: "Gel Polish",
    price: 600,
    branch: new ObjectId("678a85f2ced7f732d6bfac47"),
    description: "Long-lasting gel polish application for nails.",
  },
  {
    title: "Nail Art",
    price: 800,
    branch: new ObjectId("678a85f2ced7f732d6bfac47"),
    description: "Customized designs to beautify your nails.",
  },
  {
    title: "Nail Extension",
    price: 1500,
    branch: new ObjectId("678a85f2ced7f732d6bfac47"),
    description: "Enhance the length and beauty of your nails.",
  },

  // Services for Branch 4
  {
    title: "Swedish Massage",
    price: 1000,
    branch: new ObjectId("678a85f2ced7f732d6bfac48"),
    description: "A classic full-body relaxation massage.",
  },
  {
    title: "Hot Stone Massage",
    price: 1500,
    branch: new ObjectId("678a85f2ced7f732d6bfac48"),
    description: "A soothing massage using heated stones.",
  },
  {
    title: "Aromatherapy Massage",
    price: 1300,
    branch: new ObjectId("678a85f2ced7f732d6bfac48"),
    description: "Relax with essential oils during your massage.",
  },
  {
    title: "Body Scrub",
    price: 1200,
    branch: new ObjectId("678a85f2ced7f732d6bfac48"),
    description: "Exfoliate and rejuvenate your skin with our scrub.",
  },
  {
    title: "Foot Spa",
    price: 800,
    branch: new ObjectId("678a85f2ced7f732d6bfac48"),
    description: "Refresh and relax your feet with our foot spa.",
  },
];

/* Service.insertMany(dummyServices); */

/* Service.insertMany([
  {
    title: "Deep Cleansing Facial",
    price: 1200,
    branch: "678a85f2ced7f732d6bfac45",
    description:
      "A rejuvenating facial treatment that deeply cleanses and nourishes your skin.",
  },
  {
    title: "Hydrating Face Mask",
    price: 800,
    branch: "678a85f2ced7f732d6bfac45",
    description:
      "A soothing face mask designed to restore moisture and give your skin a healthy glow.",
  },
  {
    title: "Anti-Aging Treatment",
    price: 1500,
    branch: "678a85f2ced7f732d6bfac45",
    description:
      "A specialized treatment to reduce fine lines and improve skin elasticity.",
  },
  {
    title: "Acne Solution Facial",
    price: 1100,
    branch: "678a85f2ced7f732d6bfac45",
    description:
      "A facial that targets acne-prone skin to reduce breakouts and redness.",
  },
  {
    title: "Skin Brightening Peel",
    price: 1300,
    branch: "678a85f2ced7f732d6bfac45",
    description:
      "A gentle peel to remove dead skin cells and brighten your complexion.",
  },
  {
    title: "Classic Lash Extensions",
    price: 1800,
    branch: "678a85f2ced7f732d6bfac46",
    description: "Enhance your lashes with natural-looking extensions.",
  },
  {
    title: "Volume Lash Extensions",
    price: 2500,
    branch: "678a85f2ced7f732d6bfac46",
    description:
      "Achieve a fuller, more dramatic lash look with volume extensions.",
  },
  {
    title: "Lash Lift and Tint",
    price: 1500,
    branch: "678a85f2ced7f732d6bfac46",
    description: "A semi-permanent curl and tint for your natural lashes.",
  },
  {
    title: "Eyelash Removal",
    price: 500,
    branch: "678a85f2ced7f732d6bfac46",
    description: "Safe and professional removal of lash extensions.",
  },
  {
    title: "Lash Maintenance Fill",
    price: 1200,
    branch: "678a85f2ced7f732d6bfac46",
    description:
      "Keep your lash extensions fresh and full with a maintenance fill.",
  },
  {
    title: "Classic Manicure",
    price: 700,
    branch: "678a85f2ced7f732d6bfac47",
    description: "A timeless manicure with nail trimming, shaping, and polish.",
  },
  {
    title: "Gel Polish Manicure",
    price: 1000,
    branch: "678a85f2ced7f732d6bfac47",
    description: "Long-lasting gel polish with a glossy finish.",
  },
  {
    title: "Spa Pedicure",
    price: 1200,
    branch: "678a85f2ced7f732d6bfac47",
    description: "Relaxing pedicure with foot soak, exfoliation, and polish.",
  },
  {
    title: "Nail Art Design",
    price: 500,
    branch: "678a85f2ced7f732d6bfac47",
    description: "Custom hand-painted designs to elevate your manicure.",
  },
  {
    title: "Paraffin Hand Treatment",
    price: 800,
    branch: "678a85f2ced7f732d6bfac47",
    description: "A hydrating treatment to soften hands and cuticles.",
  },

  {
    title: "Swedish Massage",
    price: 1500,
    branch: "678a85f2ced7f732d6bfac48",
    description:
      "A gentle full-body massage to relieve tension and improve circulation.",
  },
  {
    title: "Deep Tissue Massage",
    price: 1800,
    branch: "678a85f2ced7f732d6bfac48",
    description: "Target deeper layers of muscles for chronic pain relief.",
  },
  {
    title: "Hot Stone Massage",
    price: 2000,
    branch: "678a85f2ced7f732d6bfac48",
    description: "Relax with the warmth of hot stones and a soothing massage.",
  },
  {
    title: "Aromatherapy Massage",
    price: 1700,
    branch: "678a85f2ced7f732d6bfac48",
    description:
      "Calm your mind and body with essential oils and light massage techniques.",
  },
  {
    title: "Foot Reflexology",
    price: 1000,
    branch: "678a85f2ced7f732d6bfac48",
    description: "A therapeutic foot massage to promote overall well-being.",
  },
]); */

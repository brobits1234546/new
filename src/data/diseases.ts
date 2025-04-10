export interface Disease {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  solutions: string[];
  imageUrl: string;
}

export const potatoDiseases: Disease[] = [
  {
    id: "late-blight",
    name: "Late Blight",
    description: "A devastating fungal disease caused by Phytophthora infestans that can destroy entire potato crops within days.",
    symptoms: [
      "Dark brown spots on leaves",
      "White fuzzy growth on leaf undersides",
      "Rapidly spreading lesions",
      "Rotting tubers with reddish-brown spots"
    ],
    solutions: [
      "Use fungicide treatments preventively",
      "Plant resistant varieties",
      "Ensure good air circulation",
      "Remove infected plants immediately",
      "Practice crop rotation"
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiI5eU_ltBS-v9aLpHPOE_1aQkY3rQJ1YoIw&s"
  },
  {
    id: "early-blight",
    name: "Early Blight",
    description: "A fungal disease caused by Alternaria solani that affects leaves, stems, and tubers.",
    symptoms: [
      "Dark concentric rings on leaves",
      "Yellow areas around spots",
      "Lower leaves affected first",
      "Brown lesions on tubers"
    ],
    solutions: [
      "Apply appropriate fungicides",
      "Maintain proper plant spacing",
      "Remove infected plant debris",
      "Use disease-free seed potatoes",
      "Implement proper irrigation practices"
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0nZtJx7QRuoZX3ec8zkkgVR78m4tLDTxTrA&s"
  },
  {
    id: "black-scurf",
    name: "Black Scurf",
    description: "A fungal disease caused by Rhizoctonia solani that affects potato tubers and stems.",
    symptoms: [
      "Black, irregular sclerotia on tubers",
      "Reddish-brown lesions on stems",
      "Stunted growth",
      "Aerial tubers formation"
    ],
    solutions: [
      "Plant certified disease-free seed potatoes",
      "Rotate crops every 3-4 years",
      "Allow soil to warm before planting",
      "Harvest promptly after vine death",
      "Use fungicide-treated seed pieces"
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhG_FDU4C2nDqsh-QJt4yMmb2oQTN8eXXng&s"
  },
  {
    id: "common-scab",
    name: "Common Scab",
    description: "A bacterial disease caused by Streptomyces species that affects potato tubers.",
    symptoms: [
      "Rough, corky patches on tubers",
      "Brown, raised or pitted lesions",
      "Superficial to deep pitting",
      "Reduced tuber quality"
    ],
    solutions: [
      "Maintain soil pH below 5.5",
      "Ensure consistent soil moisture",
      "Plant resistant varieties",
      "Practice crop rotation",
      "Avoid adding fresh manure"
    ],
    imageUrl: "https://www.potatoesincanada.com/wp-content/uploads/2020/02/PIC1-4-Scabby-new-variety-EB.jpg"
  },
  {
    id: "bacterial-soft-rot",
    name: "Bacterial Soft Rot",
    description: "A bacterial disease caused by various Pectobacterium species that causes rapid tissue decay.",
    symptoms: [
      "Soft, mushy tuber tissue",
      "Foul odor",
      "Dark, water-soaked areas",
      "Cream to tan colored rot"
    ],
    solutions: [
      "Avoid harvesting in wet conditions",
      "Ensure proper storage conditions",
      "Handle tubers carefully to prevent injury",
      "Maintain good ventilation in storage",
      "Remove infected tubers promptly"
    ],
    imageUrl: "https://projectbluearchive.blob.core.windows.net/media/Default/Potatoes/Disease%20and%20defects/Pit%20rot_0%20resized.jpg  "
  }
];
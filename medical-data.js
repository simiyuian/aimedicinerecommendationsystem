// --- Medical Data Processor: Fixed Version (Diet + Workout + Confidence) ---

class MedicalDataProcessor {
  constructor() {
    this.loadMedicalData();
  }

  loadMedicalData() {
    // -------------------- SYMPTOM → DISEASE MAP --------------------
    this.symptomDiseaseMap = {
      "itching,skin_rash,nodal_skin_eruptions": "Fungal infection",
      "continuous_sneezing,shivering,chills": "Common Cold",
      "stomach_pain,acidity,ulcers_on_tongue": "Peptic Ulcer Disease",
      "muscle_wasting,patches_in_throat,high_fever": "Tuberculosis",
      "fatigue,weight_loss,restlessness,lethargy": "Diabetes",
      "headache,vomiting,blurred_vision": "Migraine",
      "chest_pain,breathlessness,sweating": "Heart attack",
      "joint_pain,neck_pain,knee_pain,stiffness": "Arthritis",
      "depression,irritability,mood_swings": "Hypothyroidism",
      "weight_gain,cold_hands_and_feets,anxiety": "Hyperthyroidism",
      "cough,chest_pain,breathlessness": "Bronchial Asthma",
      "varicose_veins,swelling_of_legs,fatigue": "Varicose Veins"
    };

    // -------------------- DESCRIPTIONS --------------------
    this.descriptions = {
      "Fungal infection":
        "A skin infection caused by fungi that results in itching, redness, and eruptions on the skin.",
      "Common Cold":
        "A viral infection of the upper respiratory tract causing sneezing, chills, and a runny nose.",
      "Peptic Ulcer Disease":
        "Painful sores in the lining of the stomach or small intestine caused by acid or bacteria.",
      "Tuberculosis":
        "A serious infectious disease that mainly affects the lungs but can spread to other organs.",
      "Diabetes":
        "A metabolic disease where blood sugar levels are too high due to insufficient insulin.",
      "Migraine":
        "A neurological condition marked by intense, throbbing headaches often accompanied by nausea or sensitivity to light.",
      "Heart attack":
        "A medical emergency caused by reduced blood flow to the heart muscles leading to tissue damage.",
      "Arthritis":
        "Inflammation of joints causing pain, swelling, stiffness, and difficulty in movement.",
      "Hypothyroidism":
        "A condition in which the thyroid gland doesn’t produce enough hormones, leading to fatigue and weight gain.",
      "Hyperthyroidism":
        "Overproduction of thyroid hormones causing anxiety, weight loss, and heat intolerance.",
      "Bronchial Asthma":
        "A chronic respiratory condition where airways become inflamed and narrow, causing breathing difficulty.",
      "Varicose Veins":
        "Swollen and twisted veins visible under the skin, usually in the legs, caused by poor blood flow."
    };

    // -------------------- PRECAUTIONS --------------------
    this.precautions = {
      "Fungal infection": [
        "Keep the affected area clean and dry",
        "Use antifungal creams as prescribed",
        "Avoid sharing towels or clothing",
        "Wear loose-fitting clothes"
      ],
      "Common Cold": [
        "Drink plenty of fluids",
        "Get adequate rest",
        "Avoid cold weather exposure",
        "Use a humidifier"
      ],
      "Peptic Ulcer Disease": [
        "Avoid spicy and acidic foods",
        "Reduce stress levels",
        "Take antacids or prescribed medicine",
        "Avoid smoking and alcohol"
      ],
      "Tuberculosis": [
        "Complete the full course of antibiotics",
        "Cover mouth while coughing",
        "Eat a high-protein diet",
        "Avoid close contact with others"
      ],
      "Diabetes": [
        "Monitor blood sugar regularly",
        "Follow a balanced diet",
        "Exercise regularly",
        "Take medications as prescribed"
      ],
      "Migraine": [
        "Rest in a quiet, dark room",
        "Avoid known triggers like caffeine",
        "Use prescribed pain relief medication",
        "Stay hydrated"
      ],
      "Heart attack": [
        "Seek emergency medical help",
        "Avoid physical exertion",
        "Take prescribed medications",
        "Follow up regularly with your doctor"
      ],
      "Arthritis": [
        "Exercise gently and regularly",
        "Use anti-inflammatory medication",
        "Apply heat or cold therapy",
        "Maintain a healthy weight"
      ],
      "Hypothyroidism": [
        "Take thyroid hormone replacement regularly",
        "Eat iodine-rich foods",
        "Avoid excessive soy intake",
        "Regularly monitor thyroid levels"
      ],
      "Hyperthyroidism": [
        "Avoid caffeine and stimulants",
        "Take anti-thyroid medications as prescribed",
        "Eat a balanced diet",
        "Regular checkups with an endocrinologist"
      ],
      "Bronchial Asthma": [
        "Avoid allergens and smoke",
        "Use inhalers as prescribed",
        "Do breathing exercises",
        "Stay hydrated"
      ],
      "Varicose Veins": [
        "Avoid standing for long periods",
        "Elevate your legs",
        "Exercise regularly",
        "Wear compression stockings"
      ]
    };

    // -------------------- MEDICATIONS --------------------
    this.medications = {
      "Fungal infection": [
        "Clotrimazole",
        "Fluconazole",
        "Ketoconazole",
        "Topical antifungal cream"
      ],
      "Common Cold": [
        "Paracetamol",
        "Antihistamines",
        "Decongestants",
        "Rest and fluids"
      ],
      "Peptic Ulcer Disease": [
        "Omeprazole",
        "Pantoprazole",
        "Antacids",
        "Sucralfate"
      ],
      "Tuberculosis": [
        "Isoniazid",
        "Rifampin",
        "Pyrazinamide",
        "Ethambutol"
      ],
      "Diabetes": [
        "Metformin",
        "Insulin injections",
        "Glimepiride",
        "Pioglitazone"
      ],
      "Migraine": [
        "Sumatriptan",
        "Ibuprofen",
        "Paracetamol",
        "Caffeine (in moderation)"
      ],
      "Heart attack": [
        "Aspirin",
        "Nitroglycerin",
        "Beta-blockers",
        "ACE inhibitors"
      ],
      "Arthritis": [
        "Ibuprofen",
        "Naproxen",
        "Corticosteroids",
        "Methotrexate"
      ],
      "Hypothyroidism": ["Levothyroxine"],
      "Hyperthyroidism": ["Methimazole", "Propylthiouracil", "Beta-blockers"],
      "Bronchial Asthma": [
        "Salbutamol inhaler",
        "Corticosteroid inhalers",
        "Montelukast",
        "Theophylline"
      ],
      "Varicose Veins": [
        "Compression stockings",
        "Aspirin",
        "Venotonic drugs",
        "Sclerotherapy (in severe cases)"
      ]
    };

    // -------------------- DIETS --------------------
    this.diets = {
      "Fungal infection": [
        "Eat yogurt with probiotics",
        "Avoid sugar-rich foods",
        "Increase garlic intake",
        "Stay hydrated"
      ],
      "Common Cold": [
        "Drink warm soups",
        "Eat citrus fruits",
        "Avoid cold drinks",
        "Stay hydrated"
      ],
      "Peptic Ulcer Disease": [
        "Avoid spicy food",
        "Eat bananas and oatmeal",
        "Reduce caffeine intake",
        "Avoid alcohol"
      ],
      "Tuberculosis": [
        "High-protein diet (eggs, milk, fish)",
        "Vitamin-rich foods",
        "Plenty of fluids",
        "Avoid junk food"
      ],
      "Diabetes": [
        "Eat whole grains and vegetables",
        "Avoid sugary drinks",
        "Consume lean proteins",
        "Control portion sizes"
      ],
      "Migraine": [
        "Avoid processed foods",
        "Eat magnesium-rich foods",
        "Drink enough water",
        "Eat regularly"
      ],
      "Heart attack": [
        "Low-fat diet",
        "Increase fruits and veggies",
        "Avoid red meat",
        "Reduce salt intake"
      ],
      "Arthritis": [
        "Eat omega-3 rich foods",
        "Avoid processed sugar",
        "Include turmeric and ginger",
        "Stay hydrated"
      ],
      "Hypothyroidism": [
        "Eat iodine-rich foods (fish, eggs)",
        "Avoid goitrogenic foods (raw cabbage)",
        "Include selenium and zinc sources",
        "High-fiber diet"
      ],
      "Hyperthyroidism": [
        "Eat more cruciferous vegetables",
        "Avoid excess iodine",
        "Stay hydrated",
        "High-protein meals"
      ],
      "Bronchial Asthma": [
        "Eat fruits and vegetables",
        "Avoid cold drinks",
        "Reduce salt",
        "Omega-3 fatty acids (fish, flaxseed)"
      ],
      "Varicose Veins": [
        "High-fiber diet",
        "Vitamin C and E rich foods",
        "Avoid processed foods",
        "Stay hydrated"
      ]
    };

    // -------------------- WORKOUTS --------------------
    this.workouts = {
      "Fungal infection": [
        "Light exercise to boost immunity",
        "Avoid excessive sweating",
        "Keep skin clean post-workout"
      ],
      "Common Cold": [
        "Light stretching or yoga",
        "Avoid heavy workouts",
        "Get enough rest"
      ],
      "Peptic Ulcer Disease": [
        "Gentle yoga or breathing exercises",
        "Avoid high-intensity workouts",
        "Relaxation techniques"
      ],
      "Tuberculosis": [
        "Breathing exercises",
        "Short walks",
        "Avoid overexertion"
      ],
      "Diabetes": [
        "Daily brisk walking",
        "Cycling or swimming",
        "Strength training in moderation"
      ],
      "Migraine": [
        "Gentle yoga",
        "Meditation or breathing practice",
        "Avoid bright-light gyms"
      ],
      "Heart attack": [
        "Cardiac rehabilitation exercises",
        "Light walking",
        "Avoid lifting heavy weights"
      ],
      "Arthritis": [
        "Water aerobics",
        "Joint flexibility exercises",
        "Walking on soft ground"
      ],
      "Hypothyroidism": [
        "Light jogging or cycling",
        "Stretching",
        "Yoga for metabolism boost"
      ],
      "Hyperthyroidism": [
        "Calming yoga or pilates",
        "Avoid intense cardio",
        "Meditation and breathing control"
      ],
      "Bronchial Asthma": [
        "Breathing control exercises",
        "Swimming (warm pools)",
        "Avoid cold weather jogging"
      ],
      "Varicose Veins": [
        "Leg elevation exercises",
        "Walking daily",
        "Avoid standing for too long"
      ]
    };
  }

  // -------------------- SYMPTOM ANALYSIS --------------------
  analyzeSymptoms(inputText) {
    const inputSymptoms = inputText
      .toLowerCase()
      .replace(/\s+/g, "_")
      .split(",")
      .map(s => s.trim());

    let bestMatch = null;
    let highestScore = 0;

    for (const [pattern, disease] of Object.entries(this.symptomDiseaseMap)) {
      const patternSymptoms = pattern.split(",");
      const matchCount = patternSymptoms.filter(sym =>
        inputSymptoms.includes(sym)
      ).length;

      if (matchCount > highestScore) {
        highestScore = matchCount;
        bestMatch = disease;
      }
    }

    if (bestMatch && highestScore > 0) {
      const confidence = Math.min(100, Math.round((highestScore / 4) * 100));

      return {
        disease: bestMatch,
        description: this.descriptions[bestMatch],
        medications: this.medications[bestMatch],
        precautions: this.precautions[bestMatch],
        diets: this.diets[bestMatch],
        workouts: this.workouts[bestMatch],
        confidence
      };
    } else {
      return { message: "No matching disease found for given symptoms." };
    }
  }
}

// --- Run via Command Line ---
const medicalDataProcessor = new MedicalDataProcessor();
const input = process.argv[2] || "itching, skin_rash, nodal_skin_eruptions";
const result = medicalDataProcessor.analyzeSymptoms(input);
console.log(result);

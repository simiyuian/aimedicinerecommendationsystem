// ✅ Global function so it’s accessible from HTML onclick buttons
function addSymptom(symptom) {
    const symptomsTextarea = document.getElementById('symptoms');
    if (!symptomsTextarea) {
        console.error("Textarea with id 'symptoms' not found.");
        return;
    }

    const currentValue = symptomsTextarea.value.trim();
    const symptoms = currentValue ? currentValue.split(',').map(s => s.trim()) : [];

    if (!symptoms.includes(symptom)) {
        symptoms.push(symptom);
        symptomsTextarea.value = symptoms.join(', ');
    }
}

// ✅ Main Symptom Checker Script
document.addEventListener('DOMContentLoaded', function () {
    const symptomForm = document.getElementById('symptomForm');
    const symptomsTextarea = document.getElementById('symptoms');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const resultsSection = document.getElementById('resultsSection');
    const analyzeBtn = document.getElementById('analyzeBtn');

    if (!symptomForm || !symptomsTextarea) {
        console.error("Required elements (form or textarea) not found in DOM.");
        return;
    }

    // ✅ Ensure medicalDataProcessor is loaded
    if (typeof medicalDataProcessor === "undefined") {
        console.error("medicalDataProcessor not found. Ensure medical-data.js is loaded before this script.");
        return;
    }

    // ✅ Autocomplete setup
    const allSymptoms = medicalDataProcessor.getAllSymptoms ? medicalDataProcessor.getAllSymptoms() : [];
    const datalist = document.createElement('datalist');
    datalist.id = 'symptomsList';

    allSymptoms.forEach(symptom => {
        const option = document.createElement('option');
        option.value = symptom;
        datalist.appendChild(option);
    });

    document.body.appendChild(datalist);
    symptomsTextarea.setAttribute('list', 'symptomsList');

    // ✅ Handle form submission
    symptomForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const symptoms = symptomsTextarea.value.trim().toLowerCase();
        if (!symptoms) {
            alert('Please enter your symptoms first.');
            return;
        }

        // Show loading
        loadingIndicator.style.display = 'block';
        resultsSection.style.display = 'none';
        analyzeBtn.disabled = true;
        analyzeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';

        // Simulate AI processing delay
        setTimeout(() => {
            const response = medicalDataProcessor.analyzeSymptoms(symptoms);
            updateResults(response);

            // Hide loading, show results
            loadingIndicator.style.display = 'none';
            resultsSection.style.display = 'block';
            resultsSection.classList.add('fade-in');

            // Reset button
            analyzeBtn.disabled = false;
            analyzeBtn.innerHTML = '<i class="fas fa-search"></i> Get AI Recommendation';

            // Scroll to results
            resultsSection.scrollIntoView({ behavior: 'smooth' });
        }, 2000);
    });

    // ✅ Function to update results in modals
    function updateResults(response) {
        if (!response) {
            alert("No results found for your symptoms. Try again with different ones.");
            return;
        }

        // Confidence fallback: if undefined, random between 80–100
        const confidence = response.confidence ? response.confidence : Math.floor(Math.random() * 21) + 80;

        document.getElementById('predictedDisease').textContent = response.disease || "Unknown Disease";
        document.getElementById('diseaseConfidence').textContent = confidence + '%';
        document.getElementById('confidenceScore').textContent = confidence + '%';
        document.getElementById('diseaseDescription').textContent = response.description || "No description available.";

        const updateList = (id, items, iconClass) => {
            const list = document.getElementById(id);
            list.innerHTML = '';
            (items || []).forEach(item => {
                const li = document.createElement('li');
                li.className = 'list-group-item';
                li.innerHTML = `<i class="${iconClass}"></i> ${item}`;
                list.appendChild(li);
            });
        };

        updateList('precautionsList', response.precautions, 'fas fa-check text-success');
        updateList('medicationsList', response.medications, 'fas fa-pill text-danger');
        updateList('workoutsList', response.workouts, 'fas fa-dumbbell text-success');
        updateList('dietsList', response.diets, 'fas fa-apple-alt text-warning');
    }

    // ✅ Button hover animation
    document.querySelectorAll('.result-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => btn.style.transform = 'translateY(-5px) scale(1.02)');
        btn.addEventListener('mouseleave', () => btn.style.transform = 'translateY(0) scale(1)');
    });
});

// Dölj flash messages efter 3 sekunder
document.addEventListener('DOMContentLoaded', () => {
    // Hantera flash messages
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.display = 'none';
        }, 3000);
    });

    // Bekräftelsedialog för radering
    const deleteForms = document.querySelectorAll('form[action^="/delete-course"]');
    deleteForms.forEach(form => {
        form.onsubmit = (e) => {
            if (!confirm('Är du säker på att du vill radera denna kurs?')) {
                e.preventDefault();
            }
        };
    });

    // Validering av formulär
    const addCourseForm = document.getElementById('addCourseForm');
    if (addCourseForm) {
        addCourseForm.onsubmit = (e) => {
            const coursecode = document.getElementById('coursecode').value.trim();
            const coursename = document.getElementById('coursename').value.trim();
            const progression = document.getElementById('progression').value.trim();
            const syllabus = document.getElementById('syllabus').value.trim();

            if (!coursecode || !coursename || !progression || !syllabus) {
                e.preventDefault();
                alert('Alla fält måste fyllas i');
                return false;
            }
        };
    }
});
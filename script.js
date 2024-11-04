const cards = document.querySelectorAll('.card');
const infoSection = document.getElementById('info');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const subject = card.getAttribute('data-subject');
        displayInfo(subject);
    });
});

function displayInfo(subject) {
    let infoText = '';

    switch (subject) {
        case 'Science':
            infoText = '<strong>Science:</strong> The systematic study of the structure and behavior of the physical and natural world through observation and experimentation.';
            break;
        case 'Literature':
            infoText = '<strong>Literature:</strong> The art of written works, encompassing poetry, drama, fiction, and non-fiction, reflecting human experiences and imagination.';
            break;
        case 'Mathematics':
            infoText = '<strong>Mathematics:</strong> The abstract science of number, quantity, and space, either as abstract concepts (pure mathematics), or as applied to other disciplines (applied mathematics).';
            break;
        case 'Art':
            infoText = '<strong>Art:</strong> A diverse range of human activities that involve the creation of visual, auditory, or performance artifacts that express the creator\'s imagination or technical skill.';
            break;
        case 'History':
            infoText = '<strong>History:</strong> A Deep dive into history our world and our life to see how far we came how far we will reach.';
            break;
        default:
            infoText = 'Select a subject to see detailed information.';
    }

    infoSection.innerHTML = infoText;
}

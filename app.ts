document.getElementById('generate-resume')?.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('Skills') as HTMLTextAreaElement).value;

    const resumeContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 {
            text-align: center;
            color: #333;
        }
        .section {
            margin-bottom: 20px;
        }
        .section h2 {
            border-bottom: 2px solid #007bff;
            padding-bottom: 5px;
            color: #007bff;
            margin-bottom: 10px;
        }
        .section p {
            margin: 5px 0;
        }
        .field-label {
            font-weight: bold;
            color: #555;
        }
        .field-value {
            margin-left: 10px;
        }
        .contact-info {
            display: flex;
            flex-direction: column;
        }
        .contact-info p {
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Resume</h1>

        <div class="section">
            <h2>Personal Information</h2>
            <p class="field-label">Name:</p>
            <p class="field-value">${name}</p>
            <p class="field-label">Telephone:</p>
            <p class="field-value">${phone}</p>
        </div>

        <div class="section">
            <h2>Education</h2>
            <p class="field-label">Degree:</p>
            <p class="field-value">${education}</p>
                    </div>

        <div class="section">
            <h2>Skills</h2>
${skills}
        </div>

                <div class="section">
            <h2>Experiance</h2>
${experience}
        </div>
    </div>
</body>
</html>
        `;

    const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
    const resumeContentDiv = document.getElementById('resume-content') as HTMLDivElement;

    resumeContentDiv.innerHTML = resumeContent;
    resumeOutput.style.display = 'block';
});

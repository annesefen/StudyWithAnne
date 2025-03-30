document.addEventListener('DOMContentLoaded', () => {
    const scenarioButtons = document.querySelectorAll('.scenario-btn');
    const scenarioText = document.getElementById('scenario-text');
    const emrcButton = document.createElement('button');
    const modal = document.createElement('div');
    const channelButtons = document.querySelectorAll('.channel-bar button');
    const channelDetails = document.querySelector('.channel-details');

    // Scenario data
    const scenarios = {
        'canceling-resources': 'A706 to Montgomery, you can cancel [ ] OR you can hold myself and return the rest.',
        'requesting-als': 'A706 to Montgomery: Start me a medic for [ ].',
        'requesting-police': 'A706 to Montgomery: Start me county police [routine/priority] for [ ]. We are not in danger.',
        'fill-assignment': 'A706 to Montgomery: I’ve got [ ], fill the assignment for [ ].',
        'hold-on-scene': 'A706 to Montgomery: Hold me on the scene of a [PIC/PDC] at [street]. [Report conditions if needed]. I am not involved. Go ahead and start me a [ ].',
        'ems-transport': 'A706 to EMS 700: I have a priority 3 [ ] Y/O M/F with [chief complaint] requesting to go to [ ] hospital. How do you copy?',
        'emrc-consult': 'EMRC EMRC this is Montgomery County Ambulance 706 requesting consult with [hospital].'
    };

    // Channel data
    const channels = {
        '7A1': `
            <h3>7A1 OPS 1: Montgomery County Operations Channel</h3>
            <p><strong>Purpose:</strong> Primary Operations Channel for field operations in Montgomery County.</p>
            <ul>
                <li><strong>Welfare Checks:</strong> Used to check on the status of EMS crews and ensure their safety.</li>
                <li><strong>Resource Management:</strong>
                    <ul>
                        <li>Sending additional units when needed.</li>
                        <li>Coordinating mutual aid during high-demand periods.</li>
                        <li>Returning units to service after call completion.</li>
                    </ul>
                </li>
                <li><strong>Incident Resolution:</strong>
                    <ul>
                        <li>Handling patient refusals.</li>
                        <li>Managing scene logistics.</li>
                    </ul>
                </li>
            </ul>
        `,
        '7A2': `
            <h3>7A2: Dispatch Channel</h3>
            <p><strong>Purpose:</strong> Primary Dispatch Channel for assigning calls and providing details.</p>
            <ul>
                <li><strong>Assigning Units:</strong> Dispatchers send specific units based on proximity, availability, and call type.</li>
                <li><strong>Call Details:</strong> Includes the nature of the call, address, hazards, and any additional 911 caller information.</li>
                <li><strong>Time Stamping:</strong>
                    <ul>
                        <li>Dispatch Time: When a call is assigned to a unit.</li>
                        <li>En Route Time: When the unit begins traveling to the scene.</li>
                        <li>On Scene Time: When the unit arrives at the scene.</li>
                        <li>Transport Time: If the unit begins transporting a patient to the hospital.</li>
                        <li>Clear Time: When the unit is ready for the next call.</li>
                    </ul>
                </li>
            </ul>
        `,
        '7H1': `
            <h3>7H1: EMRC Consult Channel</h3>
            <p><strong>Purpose:</strong> Hospital consults for medical alerts (e.g., STEMI, stroke).</p>
            <ul>
                <li>Notifying hospitals of incoming patients.</li>
                <li>Relaying critical patient details and requests.</li>
                <li>Ensuring hospital readiness for incoming patients.</li>
            </ul>
        `,
        '7H2': `
            <h3>7H2: EMRC Hospital Channel</h3>
            <p><strong>Purpose:</strong> Alternate channel for hospital communication during high traffic.</p>
            <ul>
                <li>Supports multiple EMS units during peak times.</li>
                <li>Ensures seamless coordination between EMS and hospitals.</li>
                <li>Activated during large-scale incidents or mass events.</li>
            </ul>
        `,
        'EB': `
            <h3>Emergency Button (EB)</h3>
            <p><strong>Purpose:</strong> Immediate signal for assistance in critical situations.</p>
            <ul>
                <li><strong>Activation:</strong> Hold for 3 seconds to trigger an alert to the Emergency Communications Center (ECC).</li>
                <li><strong>Response to Activation:</strong>
                    <ul>
                        <li>If intentional, crews must provide details of the emergency.</li>
                        <li>ECC dispatches additional resources, including police if needed.</li>
                    </ul>
                </li>
                <li><strong>Accidental Activation:</strong> Notify ECC immediately to reset the button.</li>
                <li><strong>When to Use:</strong>
                    <ul>
                        <li>Immediate threats to EMS personnel safety.</li>
                        <li>Situations requiring immediate police or manpower assistance.</li>
                        <li>If personnel cannot transmit a detailed message due to danger.</li>
                    </ul>
                </li>
            </ul>
        `
    };

    // Add event listeners to scenario buttons
    scenarioButtons.forEach(button => {
        button.addEventListener('click', () => {
            const scenarioKey = button.getAttribute('data-scenario');
            scenarioText.textContent = scenarios[scenarioKey] || 'Scenario details not found.';
        });
    });

    // Add event listeners to channel buttons
    channelButtons.forEach(button => {
        button.addEventListener('click', () => {
            const channelKey = button.getAttribute('data-channel');
            channelDetails.innerHTML = channels[channelKey] || '<p>Channel details not found.</p>';
        });
    });

    // Create EMRC pop-up modal
    emrcButton.innerText = 'What is EMRC?';
    emrcButton.classList.add('info-btn');

    modal.classList.add('modal', 'hidden');
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-btn">×</button>
            <h3>What is EMRC?</h3>
            <p>
                The Emergency Medical Resource Center (EMRC) is a critical communication hub for EMS clinicians, enabling seamless coordination between prehospital providers and hospital-based resources.
            </p>
            <p>
                EMRC ensures vital information is relayed in real time to emergency departments, specialty centers, and authorized physicians. It improves patient care and decision-making during emergencies.
            </p>
            <ul>
                <li><strong>Hospital Notifications:</strong> For Priority 1 and 2 patients, trauma, or specialty cases.</li>
                <li><strong>Medical Consultation:</strong> For advanced treatment decisions or protocol-directed care.</li>
                <li><strong>Mass Casualty Incidents (MCI):</strong> Coordination of communication and resources.</li>
            </ul>
        </div>
    `;
    document.body.appendChild(modal);
    document.querySelector('.interactive-materials').appendChild(emrcButton);

    // Add modal open/close functionality
    emrcButton.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.classList.add('hidden');
    });
});

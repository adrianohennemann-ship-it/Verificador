// Time zones database with UTC offsets
const TIMEZONES = {
    'UTC': { label: '🌍 UTC (Coordinated Universal Time)', offset: 0 },
    'America/New_York': { label: '🗽 New York (EST/EDT)', offset: -5 },
    'America/Chicago': { label: '🏙️ Chicago (CST/CDT)', offset: -6 },
    'America/Denver': { label: '⛰️ Denver (MST/MDT)', offset: -7 },
    'America/Los_Angeles': { label: '🌴 Los Angeles (PST/PDT)', offset: -8 },
    'America/Anchorage': { label: '🐻 Anchorage (AKST/AKDT)', offset: -9 },
    'Pacific/Honolulu': { label: '🌺 Honolulu (HST)', offset: -10 },
    'Europe/London': { label: '🇬🇧 London (GMT/BST)', offset: 0 },
    'Europe/Paris': { label: '🇫🇷 Paris (CET/CEST)', offset: 1 },
    'Europe/Berlin': { label: '🇩🇪 Berlin (CET/CEST)', offset: 1 },
    'Europe/Moscow': { label: '🇷🇺 Moscow (MSK)', offset: 3 },
    'Asia/Dubai': { label: '🇦🇪 Dubai (GST)', offset: 4 },
    'Asia/Kolkata': { label: '🇮🇳 New Delhi (IST)', offset: 5.5 },
    'Asia/Bangkok': { label: '🇹🇭 Bangkok (ICT)', offset: 7 },
    'Asia/Hong_Kong': { label: '🇭🇰 Hong Kong (HKT)', offset: 8 },
    'Asia/Shanghai': { label: '🇨🇳 Shanghai (CST)', offset: 8 },
    'Asia/Tokyo': { label: '🇯🇵 Tokyo (JST)', offset: 9 },
    'Asia/Seoul': { label: '🇰🇷 Seoul (KST)', offset: 9 },
    'Australia/Sydney': { label: '🇦🇺 Sydney (AEDT/AEST)', offset: 11 },
    'Pacific/Auckland': { label: '🇳🇿 Auckland (NZDT/NZST)', offset: 13 },
};

// Default selected time zones
let selectedTimezones = ['UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo'];

// DOM Elements
const clockGrid = document.getElementById('clockGrid');
const emptyState = document.getElementById('emptyState');
const timezoneSelect = document.getElementById('timezoneSelect');
const searchInput = document.getElementById('searchInput');
const resetBtn = document.getElementById('resetBtn');

// Initialize the application
function init() {
    populateTimezoneSelect();
    renderClocks();
    startClockUpdates();
    attachEventListeners();
}

// Populate timezone dropdown
function populateTimezoneSelect() {
    timezoneSelect.innerHTML = '<option value="">+ Add Time Zone</option>';
    
    Object.keys(TIMEZONES).forEach(timezone => {
        if (!selectedTimezones.includes(timezone)) {
            const option = document.createElement('option');
            option.value = timezone;
            option.textContent = TIMEZONES[timezone].label;
            timezoneSelect.appendChild(option);
        }
    });
}

// Render all clock cards
function renderClocks() {
    clockGrid.innerHTML = '';

    if (selectedTimezones.length === 0) {
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';

    selectedTimezones.forEach(timezone => {
        const card = createClockCard(timezone);
        clockGrid.appendChild(card);
    });
}

// Create individual clock card
function createClockCard(timezone) {
    const card = document.createElement('div');
    card.className = 'clock-card';
    card.dataset.timezone = timezone;

    const { label } = TIMEZONES[timezone];

    card.innerHTML = `
        <div class="clock-card-header">
            <div class="timezone-name">${label}</div>
            <button class="remove-btn" data-timezone="${timezone}">×</button>
        </div>
        <div class="digital-display">
            <div class="time" data-time="${timezone}">--:--:--</div>
            <div class="time-12h" data-time-12h="${timezone}">-- -- --</div>
        </div>
        <div class="info-grid">
            <div class="info-item">
                <div class="info-label">Date</div>
                <div class="info-value" data-date="${timezone}">--/--/--</div>
            </div>
            <div class="info-item">
                <div class="info-label">Day</div>
                <div class="info-value" data-day="${timezone}">---</div>
            </div>
            <div class="info-item offset">
                <div class="info-label">UTC Offset</div>
                <div class="info-value" data-offset="${timezone}">UTC+0</div>
            </div>
        </div>
    `;

    // Add remove button event
    const removeBtn = card.querySelector('.remove-btn');
    removeBtn.addEventListener('click', () => removeTimezone(timezone));

    return card;
}

// Update clock display
function updateClocks() {
    selectedTimezones.forEach(timezone => {
        updateClockDisplay(timezone);
    });
}

// Update single clock display
function updateClockDisplay(timezone) {
    const now = new Date();
    
    // Create formatter for the specific timezone
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });

    const formatter12 = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    });

    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        month: '2-digit',
        day: '2-digit',
        year: '2-digit',
    });

    const dayFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        weekday: 'long',
    });

    const timeString = formatter.format(now);
    const time12String = formatter12.format(now);
    const dateString = dateFormatter.format(now);
    const dayString = dayFormatter.format(now);

    // Update DOM
    const timeEl = document.querySelector(`[data-time="${timezone}"]`);
    const time12El = document.querySelector(`[data-time-12h="${timezone}"]`);
    const dateEl = document.querySelector(`[data-date="${timezone}"]`);
    const dayEl = document.querySelector(`[data-day="${timezone}"]`);
    const offsetEl = document.querySelector(`[data-offset="${timezone}"]`);

    if (timeEl) timeEl.textContent = timeString;
    if (time12El) time12El.textContent = time12String;
    if (dateEl) dateEl.textContent = dateString;
    if (dayEl) dayEl.textContent = dayString;
    if (offsetEl) {
        const offset = TIMEZONES[timezone].offset;
        const sign = offset >= 0 ? '+' : '';
        const offsetStr = offset % 1 === 0 ? offset : offset.toFixed(1);
        offsetEl.textContent = `UTC${sign}${offsetStr}`;
    }
}

// Start continuous clock updates
function startClockUpdates() {
    updateClocks();
    setInterval(updateClocks, 1000);
}

// Add timezone
function addTimezone(timezone) {
    if (timezone && !selectedTimezones.includes(timezone)) {
        selectedTimezones.push(timezone);
        renderClocks();
        populateTimezoneSelect();
        timezoneSelect.value = '';
    }
}

// Remove timezone
function removeTimezone(timezone) {
    selectedTimezones = selectedTimezones.filter(tz => tz !== timezone);
    renderClocks();
    populateTimezoneSelect();
}

// Reset to default
function resetToDefault() {
    selectedTimezones = ['UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo'];
    renderClocks();
    populateTimezoneSelect();
    timezoneSelect.value = '';
    searchInput.value = '';
}

// Search functionality
function filterTimezones(searchTerm) {
    const term = searchTerm.toLowerCase();
    const options = Array.from(timezoneSelect.querySelectorAll('option'));

    options.forEach(option => {
        if (option.value === '') return; // Keep the placeholder

        const text = option.textContent.toLowerCase();
        option.style.display = text.includes(term) ? 'block' : 'none';
    });
}

// Attach event listeners
function attachEventListeners() {
    timezoneSelect.addEventListener('change', (e) => {
        if (e.target.value) {
            addTimezone(e.target.value);
        }
    });

    searchInput.addEventListener('input', (e) => {
        filterTimezones(e.target.value);
    });

    resetBtn.addEventListener('click', resetToDefault);
}

// Start the app
init();

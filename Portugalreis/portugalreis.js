
// Valid Google Maps Logo URL (Public domain or widely standard)
const GOOGLE_MAPS_ICON = 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg';
const BOOKING_ICON = 'https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg';

const ALLTRAILS_ICON = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/AllTrails_logo.svg/336px-AllTrails_logo.svg.png'; // Using this as placeholder, or just text if it breaks. Let's use a reliable one or text.
// Actually, let's use a direct reliable logo or just text.
// User requested "AllTrails-logo". I will use a path to a generic trail icon or the text.
// Let's try this one, if it fails I'll use text.
// Better: specific styling.

// Data for Week 1 (Hardcoded based on user files)
const week1Data = {
    accomodation: [
        {
            name: "Refúgio das Laranjeiras",
            address: "R. 6 6, 4845-043, Parada do Bouro, Portugal",
            phone: "+351 939 049 404",
            mapsUrl: "https://maps.app.goo.gl/u3HVBZ7oz63KwJW19",
            bookingUrl: "https://www.booking.com/hotel/pt/refugio-das-laranjeiras.nl.html?age=9&age=6&age=11&age=13&aid=964694&app_hotel_id=8879571&checkin=2026-08-11&checkout=2026-08-18&from_sn=android&group_adults=5&group_children=4&label=hotel_details-VIRyFzc%401768423720&no_rooms=1&req_adults=5&req_age=9&req_age=6&req_age=11&req_age=13&req_children=4&room1=A%2CA%2CA%2CA%2CA%2C9%2C6%2C11%2C13&activeTab=photosGallery",
            description: "Onze uitvalsbasis voor de eerste week."
        }
    ],
    facilities: [
        {
            category: "Supermarkten",
            items: [
                { name: "Mini Mercado Vila / de Bouro", distance: "7 min", type: "Mini", mapsUrl: "https://maps.app.goo.gl/UmjERYwjARuQdUiu7" },
                { name: "Casa Varanda / Soengas", distance: "18 min", type: "Kleine mercado", mapsUrl: "https://maps.app.goo.gl/nm8XMHQAhLDnNYsx6" },
                { name: "Pingo Doce / Vieira do Minho", distance: "22 min", type: "Supermarkt", mapsUrl: "https://maps.app.goo.gl/XisEvp1Yexnrmban7" },
                { name: "Lidl / Vieira do Minho", distance: "23 min", type: "Supermarkt", mapsUrl: "https://maps.app.goo.gl/87pgceFmBnmUiJwR8" },
                { name: "Continente / Póvoa de Lanhoso", distance: "25 min", type: "Hypermarché", mapsUrl: "https://maps.app.goo.gl/Vfj4r1FvdizazZjf8" },
                { name: "Intermarché / Terras de Bouro", distance: "30 min", type: "Supermarkt", mapsUrl: "https://maps.app.goo.gl/qDQ99e9TTHBvmrP36" }
            ]
        },
        {
            category: "Pastelaria",
            items: [
                { name: "Bicas - Pastelaria Universal / Friande", distance: "8 min", type: "Cafetaria / Pastelaria", mapsUrl: "https://maps.app.goo.gl/uNExWhjji1s4LH328" },
                { name: "Pastelaria São Sebastião / Amares", distance: "23 min", type: "Bakkerij", mapsUrl: "https://maps.app.goo.gl/dfd71rkumBPXr8sV6" },
                { name: "Confeitaria Santo Antonio / Braga", distance: "45 min", type: "Bakkerij", mapsUrl: "https://maps.app.goo.gl/ufdKsAVZYYqhbSCD8" }
            ]
        },
        {
            category: "Restaurants",
            items: [
                { name: "Quinta do Bôco / Parada do Bouro", distance: "5 min", price: "€", mapsUrl: "https://maps.app.goo.gl/vhP4M1DTXhKRfcKz7" },
                { name: "Restaurante Vessada / Valdosende", distance: "6 min", price: "€", mapsUrl: "https://maps.app.goo.gl/kvfWMT7MSXMGus998" },
                { name: "Restaurante típico O Sobreiro / Raposeira", distance: "12 min", price: "€ 15-25", mapsUrl: "https://maps.app.goo.gl/Wx5r5eyFPe3c7BJ28" },
                { name: "Restaurante O Encontro / Terras de Bouro", distance: "18 min", price: "€ 10-15", mapsUrl: "https://maps.app.goo.gl/yL9nxJeAh9GXthc1A" },
                { name: "O Victor / Póvoa de Lanhoso", distance: "23 min", price: "€ 20-30", mapsUrl: "https://maps.app.goo.gl/T9EZcfPavPA7NkUd9" },
                { name: "Restaurante Lua de Mel / Terras de Bouro", distance: "33 min", price: "€ 10-15", mapsUrl: "https://maps.app.goo.gl/6jGfy8HitG63mqNf6" },
                { name: "Fojo dos Lobos / Fafião", distance: "39 min", price: "€ 10-15", mapsUrl: "https://maps.app.goo.gl/FL6tqeeKUf55YTdZ6" },
                { name: "Taberna da Ti Ana da Eira / Parada do Outeiro", distance: "1u 13m", price: "€ 20-25", note: "Mooi uitzicht", mapsUrl: "https://maps.app.goo.gl/FeYLcYvv7qa9u7G48" }
            ]
        },
        {
            category: "Eenvoudig en goedkoop eten",
            items: [
                { name: "Churrascaria S. José / Vieira do Minho", distance: "23 min", type: "Cafetaria", mapsUrl: "https://maps.app.goo.gl/HP9W5RBxxQeJ4Wph8/" },
                { name: "Pizzaria Ritrovo / Vieira do Minho", distance: "23 min", type: "Pizzeria", mapsUrl: "https://maps.app.goo.gl/sv42jVTKJpNn8Yyc7" },
                { name: "Adega Regional Geira / Rio Caldo", distance: "32 min", type: "Tapas", mapsUrl: "https://maps.app.goo.gl/7hnPXYQqpSkcbPPQ7" }
            ]
        }
    ],
    activities: [
        {
            category: "Zwemmen",
            items: [
                { name: "Praia fluvial de Alqueirão", distance: "13 min", image: "Data week 1 - Refúgio das Laranjeiras/Afbeeldingen activiteiten/Praia do Alqueirao.jpg", note: "Stuwmeer, populair/druk, verhuurmogelijkheden", mapsUrl: "https://maps.app.goo.gl/d2s3Z6akchRZXibJA" },
                { name: "Praia Fluvial da Barca", distance: "14 min", image: "Data week 1 - Refúgio das Laranjeiras/Afbeeldingen activiteiten/Praia Fluvial da Barca.png", note: "Stuwmeer, breed strand, eenvoudiger en rustiger", mapsUrl: "https://maps.app.goo.gl/D6EXSVi8kPSkd56D6" },
                { name: "Praia Fluvial Ribeira Gerês", distance: "17 min", image: "Data week 1 - Refúgio das Laranjeiras/Afbeeldingen activiteiten/Praia Fluvial Ribeira Gerês.png", note: "Kleiner strand, meer natuur, rustiger", mapsUrl: "https://maps.app.goo.gl/7wJqZjYdvKcZEkBD8" },
                { name: "Praia Fluvial da Albufeira do Ermal", distance: "32 min", image: "Data week 1 - Refúgio das Laranjeiras/Afbeeldingen activiteiten/Praia Fluvial da Albufeira do Ermal.png", note: "Ander stuwmeer, breed strand", mapsUrl: "https://maps.app.goo.gl/vSkNztdjTUcyzFGZ7" },
                { name: "Praia Fluvial do Bôc", distance: "7 min", image: "Data week 1 - Refúgio das Laranjeiras/Afbeeldingen activiteiten/Praia Fluvial do Bôco.png", note: "Aan de rivier, dichtsbijzijnd", mapsUrl: "https://maps.app.goo.gl/bUC6HMYRAn6ACz4t5" },
                { name: "Praia Fluvial de Verim", distance: "24 min", image: "Data week 1 - Refúgio das Laranjeiras/Afbeeldingen activiteiten/Praia Fluvial de Verim.png", note: "Aan de rivier, wat breder, met bar", mapsUrl: "https://maps.app.goo.gl/Hfb6LBNXVtSqihWMA" }
            ]
        },
        {
            category: "Wandelen",
            items: [
                {
                    name: "Grote rondwandeling om Castro Laboreiro",
                    distance: "1u 34m",
                    hikeDuration: "5u 15m",
                    difficulty: "Middelzwaar",
                    route: "Fysieke kaart",
                    image: "Data week 1 - Refúgio das Laranjeiras/Afbeeldingen activiteiten/castro_laboreiro.png",
                    description: "Castro Laboreiro is een grotere nederzetting vlak aan de grens met Spanje. Op een rots boven het dorp liggen de ruïnes van een van de oudste burchten van Portugal. Hier start een rondwandeling die tot de mooiste wandelingen in het nationaal park behoort. De route voert met een grote boog om Castro Laboreiro en de vestingheuvel heen en verbindt dorpsidylle met een indrukwekkend natuurlandschap.",
                    routeUrl: "https://drive.google.com/file/d/1caeRx9iwkhW7iC3DoWxusgCx8r5BAchI/view?usp=drive_link",
                    allTrailsUrl: "https://www.alltrails.com/nl-nl/wandelpad/portugal/viana-do-castelo/pr3-mlg-trilho-castrejo",
                    mapsUrl: "https://maps.app.goo.gl/UEPiwUAZ9TKDQSQi7"
                },
                { name: "Online wandelpaden Terras de Bouro", url: "https://turismo.cm-terrasdebouro.pt/listing-category/aventura/trilhos-pedestres/" },
                { name: "AllTrails Peneda-Gerês", url: "https://www.alltrails.com/nl-nl/parken/portugal/braga/parque-nacional-da-peneda-geres" },
                { name: "Wikiloc Covide", url: "https://pt.wikiloc.com/trilhas/trekking/portugal/braga/covide" }
            ]
        },
        {
            category: "Steden & Cultuur",
            items: [
                {
                    name: "Braga: Het Rome van Portugal",
                    distance: "30-40 min",
                    description: "Een stad van barokke overdaad en religieuze devotie, maar ook een jonge universiteitsstad.\n\nHoogtepunten:\n• Bom Jesus do Monte (UNESCO): Funicular (oudste op waterkracht) en de 577 treden tellende trap.\n• Mosteiro de São Martinho de Tibães: Prachtige tuinen ('Cerca').\n• Centrum: Sé de Braga en Tíbias de Braga proeven.",
                    url: "https://visitbraga.travel/en" // English tourist page
                }
            ]
        }
    ]
};

// Functions to Render Content
function renderWeek1() {
    const container = document.getElementById('week1');
    container.innerHTML = ''; // Clear

    // 1. Create Sub-Navigation
    const subNav = document.createElement('div');
    subNav.className = 'sub-tabs-container';
    subNav.innerHTML = `
        <button class="sub-tab-btn active" onclick="switchSubTab('faciliteiten')">Faciliteiten</button>
        <button class="sub-tab-btn" onclick="switchSubTab('activiteiten')">Activiteiten</button>
    `;
    container.appendChild(subNav);

    // 2. Create Content Containers
    const facilitiesContainer = document.createElement('div');
    facilitiesContainer.id = 'subtab-faciliteiten';
    facilitiesContainer.className = 'sub-tab-content active';
    container.appendChild(facilitiesContainer);

    const activitiesContainer = document.createElement('div');
    activitiesContainer.id = 'subtab-activiteiten';
    activitiesContainer.className = 'sub-tab-content';
    container.appendChild(activitiesContainer);


    // --- POPULATE FACILITIES (Accomodation + Facilities Data) ---

    // Accomodation Section
    const accomodationSection = document.createElement('div');
    accomodationSection.className = 'content-section';
    accomodationSection.innerHTML = `<h2 class="section-title">Accommodatie</h2><div class="items-grid" id="w1-accomodation"></div>`;
    facilitiesContainer.appendChild(accomodationSection);

    const accGrid = accomodationSection.querySelector('#w1-accomodation');
    week1Data.accomodation.forEach(item => {
        accGrid.appendChild(createCard(item, 'accomodation'));
    });

    // Helper to parse "1u 30m" or "15 min" into total minutes for sorting
    function parseTimeToMinutes(timeStr) {
        if (!timeStr) return Infinity; // Items without distance go to the bottom
        let mins = 0;
        const uurMatch = timeStr.match(/(\d+)\s*(?:u|uur|h)/i);
        const minMatch = timeStr.match(/(\d+)\s*m/i);
        if (uurMatch) mins += parseInt(uurMatch[1]) * 60;
        if (minMatch) mins += parseInt(minMatch[1]);
        return mins;
    }

    // Other Facilities Sections
    week1Data.facilities.forEach(cat => {
        const section = document.createElement('div');
        section.className = 'content-section';
        section.innerHTML = `<h2 class="section-title">${cat.category}</h2><div class="items-grid"></div>`;
        const grid = section.querySelector('.items-grid');

        // Sort items by distance
        const sortedItems = [...cat.items].sort((a, b) => parseTimeToMinutes(a.distance) - parseTimeToMinutes(b.distance));

        sortedItems.forEach(item => {
            // Determine type... logic from before
            let type = 'shop';
            if (['Restaurants', 'Eenvoudig en goedkoop eten'].includes(cat.category)) type = 'restaurant';

            grid.appendChild(createCard(item, type));
        });
        facilitiesContainer.appendChild(section);
    });


    // --- POPULATE ACTIVITIES ---
    week1Data.activities.forEach(cat => {
        const section = document.createElement('div');
        section.className = 'content-section';
        section.innerHTML = `<h2 class="section-title">${cat.category}</h2><div class="items-grid"></div>`;
        const grid = section.querySelector('.items-grid');

        // Sort items by distance
        const sortedItems = [...cat.items].sort((a, b) => parseTimeToMinutes(a.distance) - parseTimeToMinutes(b.distance));

        sortedItems.forEach(item => {
            grid.appendChild(createCard(item, 'activity'));
        });
        activitiesContainer.appendChild(section);
    });
}

// Sub-tab switching function (global scope needed for onclick)
window.switchSubTab = function (tabName) {
    // Buttons
    const buttons = document.querySelectorAll('.sub-tab-btn');
    buttons.forEach(btn => {
        if (btn.textContent.toLowerCase() === tabName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Content
    document.querySelectorAll('.sub-tab-content').forEach(el => el.classList.remove('active'));
    document.getElementById(`subtab-${tabName}`).classList.add('active');
};

function createCard(item, type) {
    const card = document.createElement('div');
    card.className = `item-card ${type}`;

    let metaHtml = '';

    // Address/Phone row
    if (item.address) metaHtml += `<div class="meta-row">📍 ${item.address}</div>`;
    if (item.phone) metaHtml += `<div class="meta-row">📞 ${item.phone}</div>`;

    // Distance & Type row
    // User requested Maps icon immediately after distance
    if (item.distance || item.type || item.price || item.note || item.mapsUrl || item.allTrailsUrl || item.routeUrl) {
        metaHtml += `<div class="meta-row">`;
        if (item.distance) metaHtml += `<span class="distance-badge">${item.distance}</span>`;

        // Maps Contextual Icon
        if (item.mapsUrl) {
            metaHtml += `<a href="${item.mapsUrl}" target="_blank" class="inline-map-btn" title="open in Google maps"><img src="${GOOGLE_MAPS_ICON}" alt="Maps"></a>`;
        }

        // AllTrails Contextual Icon
        if (item.allTrailsUrl) {
            metaHtml += `<a href="${item.allTrailsUrl}" target="_blank" class="inline-map-btn" title="open in AllTrails"><img src="Data week 1 - Refúgio das Laranjeiras/Afbeeldingen activiteiten/Alltrails.png" alt="AllTrails"></a>`;
        }

        // Route Description Contextual Icon
        if (item.routeUrl) {
            metaHtml += `<a href="${item.routeUrl}" target="_blank" class="inline-map-btn" title="open routebeschrijving" style="text-decoration: none; font-size: 14px; line-height: 1;">🗺️</a>`;
        }

        if (item.type) metaHtml += `<span>${item.type}</span>`;
        if (item.price) metaHtml += `<span class="price-indicator">${item.price}</span>`;
        if (item.note) {
            const hasPreceding = item.distance || item.type || item.price;
            metaHtml += `<span>${hasPreceding ? '• ' : ''}<em>${item.note}</em></span>`;
        }
        metaHtml += `</div>`;
    }

    // Hike Details Row (New)
    if (item.hikeDuration || item.difficulty || item.route) {
        metaHtml += `<div class="meta-row hike-details">`;
        if (item.hikeDuration) metaHtml += `<span class="hike-badge duration">${item.hikeDuration}</span>`;
        if (item.difficulty) metaHtml += `<span class="hike-badge difficulty">${item.difficulty}</span>`;
        if (item.route) metaHtml += `<span class="hike-badge route">${item.route}</span>`;
        metaHtml += `</div>`;
    }

    // Description/Note if not in meta
    let descHtml = '';
    if (item.description) {
        descHtml = `<div class="item-description">${item.description}</div>`;
    }

    // Image (Mini-plaatje)
    let imageHtml = '';
    if (item.image) {
        imageHtml = `<div class="item-image"><img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'"></div>`;
    }

    // Actions
    let actionsHtml = '<div class="item-actions">';
    if (item.bookingUrl) {
        actionsHtml += `<a href="${item.bookingUrl}" target="_blank" class="action-btn btn-link">Booking</a>`;
    }
    if (item.url) {
        actionsHtml += `<a href="${item.url}" target="_blank" class="action-btn btn-link">Website</a>`;
    }
    actionsHtml += '</div>';

    card.innerHTML = `
        <div class="item-header">
            <div class="item-name">${item.name}</div>
        </div>
        <div class="item-content">
            ${imageHtml}
            <div class="item-meta">${metaHtml}</div>
            ${descHtml}
            ${actionsHtml}
        </div>
    `;

    return card;
}


// Travel Schedule Data
const heenreisData = {
    date: "Dinsdag 11 augustus 2026",
    steps: [
        { time: "03.30", activity: "Vertrek uit Woerdense Verlaat", details: "Taxibus 10 personen + bagage" },
        { time: "04.00", activity: "Aankomst Luchthaven Schiphol" },
        { time: "04.30", activity: "Inchecken Luchthaven Schiphol" },
        { time: "06.40", activity: "Vertrek vlucht naar luchthaven Porto", duration: "2.45 uur", details: "Vluchtnummer: <later aanvullen>" },
        { time: "08.25", activity: "Aankomst luchthaven Porto <span class='small-note'>(locale tijd)</span>" },
        { time: "09.15", activity: "Afhalen huurauto", details: "Locatie: <later aanvullen>" },
        { time: "09.30", activity: "Reis naar Refúgio das Laranjeiras", mapsUrl: "https://maps.app.goo.gl/qTK6sY871itHyKL87" },
        { time: "11.00", activity: "Aankomst in Refúgio das Laranjeiras", image: "Data week 1 - Refúgio das Laranjeiras/Afbeeldingen accomodatie/zwembad.jpg" } // Using relative path based on file system structure
    ]
};

const transferData = {
    date: "Dinsdag 18 augustus 2026",
    steps: [
        { time: "09.30", activity: "Vertrek uit Parada do Bouro" },
        {
            time: "11.15",
            activity: "Aankomst Afife",
            details: "Caminho Da Costela, 4900-012, Portugal\nTelefoonnummer: <later toevoegen>",
            mapsUrl: "https://maps.app.goo.gl/6U43D8gp82r7xySn7"
        }
    ]
};

const terugreisData = {
    date: "Dinsdag 25 augustus 2026",
    steps: [
        { time: "05.45", activity: "Vertrek uit Afife naar Luchthaven Porto", mapsUrl: "https://share.google/X9Pol6waoAdZPoGDO" }, // Note: User provided share.google link, keeping as is
        { time: "07.00", activity: "Aankomst luchthaven Porto / inleveren huurauto" },
        { time: "07.30", activity: "Inchecken luchthaven Porto" },
        { time: "08.55", activity: "Vertrek vlucht naar luchthaven Schiphol", duration: "2u40m", details: "Vluchtnummer: <later aanvullen>" },
        { time: "12.35", activity: "Aankomst luchthaven Schiphol <span class='small-note'>(locale tijd)</span>" }
    ]
};

function renderTimeline(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    // Date Header
    const dateHeader = document.createElement('div');
    dateHeader.className = 'timeline-date';
    dateHeader.textContent = data.date;
    container.appendChild(dateHeader);

    // Timeline Container
    const timeline = document.createElement('div');
    timeline.className = 'timeline';

    data.steps.forEach(step => {
        const item = document.createElement('div');
        item.className = 'timeline-item';

        // Time
        const timeHtml = `<div class="timeline-time">${step.time}${step.note ? `<span class="time-note"> ${step.note}</span>` : ''}</div>`;

        // Content
        let contentHtml = `<div class="timeline-content">`;
        contentHtml += `<div class="timeline-activity">${step.activity}</div>`;

        if (step.duration) contentHtml += `<div class="timeline-detail">⏱️ Reisduur: ${step.duration}</div>`;
        if (step.details) contentHtml += `<div class="timeline-detail">${step.details.replace(/\n/g, '<br>')}</div>`;

        // Actions/Media
        if (step.mapsUrl) {
            contentHtml += `<a href="${step.mapsUrl}" target="_blank" class="action-btn btn-maps tiny icon-only" title="Bekijk op kaart"><img src="${GOOGLE_MAPS_ICON}" class="icon-img" alt="Maps"></a>`;
        }

        if (step.image) {
            // Check if it's a placeholder or real path
            contentHtml += `<div class="timeline-image"><img src="${step.image}" alt="Locatie foto" onerror="this.style.display='none'"></div>`;
        }

        contentHtml += `</div>`; // End content

        item.innerHTML = `${timeHtml}${contentHtml}`;
        timeline.appendChild(item);
    });

    container.appendChild(timeline);
}

// Tab Switching Logic
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked
            tab.classList.add('active');

            // Show content
            const targetId = tab.dataset.tab;
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Render All Content
    renderTimeline(heenreisData, 'heenreis');
    renderWeek1();
    renderTimeline(transferData, 'transfer');
    renderTimeline(terugreisData, 'terugreis');
});

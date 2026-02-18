
// Valid Google Maps Logo URL (Public domain or widely standard)
const GOOGLE_MAPS_ICON = 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg';
const BOOKING_ICON = 'https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg';

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
                { name: "Praia fluvial de Alqueirão", note: "Stuwmeer, populair/druk, verhuurmogelijkheden", mapsUrl: "https://maps.app.goo.gl/d2s3Z6akchRZXibJA" },
                { name: "Praia Fluvial da Barca", note: "Stuwmeer, breed strand, eenvoudiger en rustiger", mapsUrl: "https://maps.app.goo.gl/D6EXSVi8kPSkd56D6" },
                { name: "Ribeira Fluvial do Gerês", note: "Kleiner strand, meer natuur, rustiger", mapsUrl: "https://maps.app.goo.gl/7wJqZjYdvKcZEkBD8" },
                { name: "Praia Fluvial da Albufeira do Ermal", note: "Stuwmeer, breed strand", mapsUrl: "https://maps.app.goo.gl/vSkNztdjTUcyzFGZ7" },
                { name: "Praia Fluvial Do Alqueidão", note: "Stuwmeer, breed strand", mapsUrl: "https://maps.app.goo.gl/DgdmjbWGkXVUFVvt7" },
                { name: "Praia Fluvial do Bôc", note: "Aan de rivier, dichtsbijzijnd", mapsUrl: "https://maps.app.goo.gl/bUC6HMYRAn6ACz4t5" },
                { name: "Praia Fluvial do Bôco", distance: "24 min", note: "Aan de rivier, wat breder, met bar", mapsUrl: "https://maps.app.goo.gl/hYFh7Auw9uJtDCneA" }
            ]
        },
        {
            category: "Wandelen",
            items: [
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

    // Other Facilities Sections
    week1Data.facilities.forEach(cat => {
        const section = document.createElement('div');
        section.className = 'content-section';
        section.innerHTML = `<h2 class="section-title">${cat.category}</h2><div class="items-grid"></div>`;
        const grid = section.querySelector('.items-grid');

        cat.items.forEach(item => {
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

        cat.items.forEach(item => {
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
    if (item.distance || item.type || item.price || item.note) { // Included item.note
        metaHtml += `<div class="meta-row">`;
        if (item.distance) metaHtml += `<span class="distance-badge">${item.distance}</span>`;
        if (item.type) metaHtml += `<span>${item.type}</span>`;
        if (item.price) metaHtml += `<span class="price-indicator">${item.price}</span>`;
        if (item.note) {
            const hasPreceding = item.distance || item.type || item.price;
            metaHtml += `<span>${hasPreceding ? '• ' : ''}<em>${item.note}</em></span>`;
        }
        metaHtml += `</div>`;
    }

    // Description/Note if not in meta
    let descHtml = '';
    if (item.description) {
        descHtml = `<div class="item-description">${item.description}</div>`;
    }

    // Actions
    let actionsHtml = '<div class="item-actions">';
    if (item.mapsUrl) {
        actionsHtml += `<a href="${item.mapsUrl}" target="_blank" class="action-btn btn-maps icon-only" title="Bekijk op kaart"><img src="${GOOGLE_MAPS_ICON}" class="icon-img" alt="Maps"></a>`;
    }
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

/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');
                
                
                class FilterSystem {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.searchInput = document.querySelector('.search-input');
        this.items = document.querySelectorAll('.floating-img');
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Filtros por botão
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', () => this.handleFilterClick(btn));
        });

        // Filtro por pesquisa
        this.searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value.toLowerCase());
        });
    }
    handleFilterClick(clickedBtn) {
        // Atualiza estado dos botões
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        clickedBtn.classList.add('active');
        
        // Aplica filtros
        const filter = clickedBtn.dataset.filter;
        this.applyFilters(filter);
    }

    handleSearch(searchTerm) {
        this.items.forEach(item => {
            const matchesSearch = item.alt.toLowerCase().includes(searchTerm);
            const matchesFilter = this.getActiveFilter().test(item.dataset.filter);
            
            this.toggleItem(item, matchesSearch && matchesFilter);
        });
    }

    applyFilters(activeFilter) {
        const filterRegex = activeFilter === 'all' ? /.*/ : new RegExp(activeFilter, 'i');
        
        this.items.forEach(item => {
            const matchesFilter = filterRegex.test(item.dataset.filter);
            const matchesSearch = item.alt.toLowerCase().includes(
                this.searchInput.value.toLowerCase()
            );
            
            this.toggleItem(item, matchesFilter && matchesSearch);
        });
    }

    toggleItem(item, shouldShow) {
        item.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        
        if(shouldShow) {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
            item.style.pointerEvents = 'all';
            setTimeout(() => item.style.display = 'block', 50);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            item.style.pointerEvents = 'none';
            setTimeout(() => item.style.display = 'none', 300);
        }
    }

    getActiveFilter() {
        const activeBtn = document.querySelector('.filter-btn.active');
        return activeBtn.dataset.filter === 'all' ? /.*/ : new RegExp(activeBtn.dataset.filter, 'i');
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const filterSystem = new FilterSystem();
});

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center',
			detach: false
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo h1').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
                                        
				});

})(jQuery);
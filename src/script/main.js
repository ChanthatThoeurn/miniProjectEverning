const movieData = {
            'Action': [
                { title: 'Thunder Strike', rating: 9.1, description: 'High-octane action with incredible stunts' },
                { title: 'Speed Force', rating: 8.7, description: 'Fast cars and faster thrills' },
                { title: 'Iron Will', rating: 9.3, description: 'A hero\'s journey against impossible odds' }
            ],
            'Comedy': [
                { title: 'Laugh Track', rating: 8.5, description: 'Comedy gold that will leave you in stitches' },
                { title: 'The Funny Bone', rating: 8.9, description: 'Smart humor meets heartfelt moments' },
                { title: 'Giggle Quest', rating: 8.2, description: 'Adventure comedy for the whole family' }
            ],
            'Drama': [
                { title: 'Tears of Joy', rating: 9.4, description: 'An emotional masterpiece about human resilience' },
                { title: 'The Last Stand', rating: 9.1, description: 'Powerful performances in this gripping drama' },
                { title: 'Broken Dreams', rating: 8.8, description: 'A haunting tale of loss and redemption' }
            ],
            'Sci-Fi': [
                { title: 'Beyond Tomorrow', rating: 9.0, description: 'Mind-bending sci-fi that questions reality' },
                { title: 'Star Bound', rating: 8.6, description: 'Epic space opera with stunning visuals' },
                { title: 'Time\'s Echo', rating: 9.2, description: 'Time travel done right with emotional depth' }
            ],
            'Horror': [
                { title: 'Midnight Terror', rating: 8.3, description: 'Psychological horror that haunts your dreams' },
                { title: 'The Dark Hour', rating: 8.7, description: 'Supernatural thriller with genuine scares' },
                { title: 'Whispers', rating: 8.1, description: 'Atmospheric horror with unexpected twists' }
            ],
            'Romance': [
                { title: 'Love\'s Promise', rating: 8.9, description: 'A timeless love story that touches hearts' },
                { title: 'Summer Rain', rating: 8.4, description: 'Romance blooms in unexpected places' },
                { title: 'Forever Yours', rating: 8.6, description: 'Epic romance spanning decades' }
            ],
            'Animation': [
                { title: 'Dreamland Adventures', rating: 9.3, description: 'Stunning animation with universal themes' },
                { title: 'Color Symphony', rating: 8.8, description: 'Visual masterpiece with emotional storytelling' },
                { title: 'Magic Kingdom', rating: 9.0, description: 'Enchanting tale for all ages' }
            ],
            'Documentary': [
                { title: 'Truth Revealed', rating: 8.7, description: 'Eye-opening investigation into important issues' },
                { title: 'Nature\'s Wonders', rating: 9.1, description: 'Breathtaking exploration of our planet' },
                { title: 'Human Stories', rating: 8.9, description: 'Inspiring tales of ordinary people doing extraordinary things' }
            ]
        };

        function showSection(sectionId) {
            // Hide all sections
            const sections = ['home', 'genres', 'trending', 'awards'];
            sections.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.classList.add('hidden');
                }
            });
            
            // Show selected section
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }
        }

        function showGenreMovies(genre) {
            const movies = movieData[genre] || [];
            const modalTitle = document.getElementById('modalTitle');
            const modalContent = document.getElementById('modalContent');
            
            modalTitle.textContent = `${genre} Movies`;
            
            modalContent.innerHTML = movies.map(movie => `
                <div class="bg-gray-700 p-4 rounded-lg">
                    <h4 class="text-xl font-semibold mb-2">${movie.title}</h4>
                    <div class="flex items-center mb-2">
                        <span class="rating-stars text-lg">★★★★★</span>
                        <span class="ml-2 text-gray-400">${movie.rating}/10</span>
                    </div>
                    <p class="text-gray-300">${movie.description}</p>
                </div>
            `).join('');
            
            document.getElementById('movieModal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('movieModal').classList.add('hidden');
        }

        // Close modal when clicking outside
        document.getElementById('movieModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Add some interactive sparkle effects
        function createSparkle() {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.color = '#3b82f6';
            sparkle.style.fontSize = '20px';
            sparkle.style.zIndex = '1000';
            sparkle.textContent = '✨';
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.animation = 'float 3s ease-out forwards';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 3000);
        }

        // Create sparkles periodically
        setInterval(createSparkle, 2000);

        // Add keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
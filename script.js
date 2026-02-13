
        function initTabGroup(groupId) {
            const group = document.getElementById(groupId);
            if (!group) return;
            const btns = group.querySelectorAll('.course-tab-btn');

            btns.forEach(btn => {
                btn.addEventListener('click', function () {
                    // 1. Deactivate all buttons in this group
                    btns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');

                    // 2. Hide all panels that belong to this group
                    btns.forEach(b => {
                        const panel = document.getElementById(b.dataset.target);
                        if (panel) panel.classList.remove('active');
                    });

                    // 3. Show selected panel
                    const target = document.getElementById(this.dataset.target);
                    if (target) target.classList.add('active');
                });
            });
        }

        initTabGroup('ugTabGroup');
        initTabGroup('pgTabGroup');


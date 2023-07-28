export default {
    mouted (el, binding) {
        const {className, activeClass, curIdx } = binding.value,
            navItems = el.querySelector(className);
        navItems[curIdx].className += ` ${activeClass}`;
    },
    updated (el, binding) {
        const {className, activeClass, curIdx } = binding.value,
            options = binding.oldValue,
            navItems = el.querySelector(className);
        navItems[curIdx].className += ` ${activeClass}`;
        navItems[options.curIdx].className = className;
    },
}

// v-nav-current = "{ className: 'nav-item',activeClass: 'nav-current', curIdx }"
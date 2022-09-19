import { writable } from 'svelte/store';

export let nav = writable([
    {name: 'Nav', visible: false},
    {name: 'Tasman Kingsley', visible: true},
    {name: 'Web app projects', visible: false},
    {name: 'Website projects', visible: false},
    {name: 'Design portfolio', visible: false},
    {name: 'Music project', visible: false},
    {name: 'About', visible: false},
  ]);

export let title = writable('');

export let dark_mode = writable(true);
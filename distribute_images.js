// distribute_images.js
// Version: 1.0.0
// Changelog:
// - Created image distribution script to map user-generated images from user_generated_images to builders' public/images

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'user_generated_images');
const baseDir = __dirname;

// Mapping: Source filename in user_generated_images -> Array of target paths relative to baseDir
const mapping = {
    // 銀河果園三部曲星球 (Orchard / Grove / Forage)
    'orchard_planet_red.png': [
        'orchard-builder (果園)/public/images/planet_red.png',
        'grove-builder (果林)/public/images/star_red.png',
        'forage-builder (採集)/public/images/cosmic_red.png'
    ],
    'orchard_planet_orange.png': [
        'orchard-builder (果園)/public/images/planet_orange.png',
        'grove-builder (果林)/public/images/star_orange.png',
        'forage-builder (採集)/public/images/cosmic_orange.png'
    ],
    'orchard_planet_yellow.png': [
        'orchard-builder (果園)/public/images/planet_yellow.png',
        'grove-builder (果林)/public/images/star_yellow.png',
        'forage-builder (採集)/public/images/cosmic_yellow.png'
    ],
    'orchard_planet_green.png': [
        'orchard-builder (果園)/public/images/planet_green.png'
    ],
    'orchard_planet_blue.png': [
        'orchard-builder (果園)/public/images/planet_blue.png'
    ],
    'grove_meteor.png': [
        'grove-builder (果林)/public/images/meteor.png'
    ],
    'grove_wormhole.png': [
        'grove-builder (果林)/public/images/wormhole.png'
    ],
    'forage_season.png': [
        'forage-builder (採集)/public/images/season.png'
    ],
    'forage_storm.png': [
        'forage-builder (採集)/public/images/storm.png'
    ],

    // 太空機器人 (ROVE)
    'rove_cmd_forward.png': ['rove-robot-builder (ROVE)/public/images/cmd_forward.png'],
    'rove_cmd_rotate.png': ['rove-robot-builder (ROVE)/public/images/cmd_rotate.png'],
    'rove_cmd_boost.png': ['rove-robot-builder (ROVE)/public/images/cmd_boost.png'],
    'rove_cmd_swap.png': ['rove-robot-builder (ROVE)/public/images/cmd_swap.png'],
    'rove_cmd_link.png': ['rove-robot-builder (ROVE)/public/images/cmd_link.png'],
    'rove_cmd_scan.png': ['rove-robot-builder (ROVE)/public/images/cmd_scan.png'],
    'rove_cmd_mission.png': ['rove-robot-builder (ROVE)/public/images/cmd_mission.png'],

    // 糗客棧 (Ugly Gryphon Inn)
    'inn_guest_knight.png': ['gryphon-inn-builder (醜獅鷲旅店)/public/images/guest_knight.png'],
    'inn_guest_wizard.png': ['gryphon-inn-builder (醜獅鷲旅店)/public/images/guest_wizard.png'],
    'inn_guest_bard.png': ['gryphon-inn-builder (醜獅鷲旅店)/public/images/guest_bard.png'],
    'inn_guest_dwarf.png': ['gryphon-inn-builder (醜獅鷲旅店)/public/images/guest_dwarf.png'],
    'inn_guest_elf.png': ['gryphon-inn-builder (醜獅鷲旅店)/public/images/guest_elf.png'],
    'inn_guest_goblin.png': ['gryphon-inn-builder (醜獅鷲旅店)/public/images/guest_goblin.png'],
    'inn_guest_dragon.png': ['gryphon-inn-builder (醜獅鷲旅店)/public/images/guest_dragon.png'],
    'inn_guest_thief.png': ['gryphon-inn-builder (醜獅鷲旅店)/public/images/guest_thief.png'],
    'inn_guest_princess.png': ['gryphon-inn-builder (醜獅鷲旅店)/public/images/guest_princess.png'],
    'inn_guest_innkeeper.png': ['gryphon-inn-builder (醜獅鷲旅店)/public/images/guest_innkeeper.png'],

    // 花語密語 (Tussie Mussie)
    'flower_rose.png': ['flower-language-builder (花之語)/public/images/flower_rose.png'],
    'flower_lily.png': ['flower-language-builder (花之語)/public/images/flower_lily.png'],
    'flower_lavender.png': ['flower-language-builder (花之語)/public/images/flower_lavender.png'],
    'flower_sunflower.png': ['flower-language-builder (花之語)/public/images/flower_sunflower.png'],
    'flower_cherry.png': ['flower-language-builder (花之語)/public/images/flower_cherry.png'],
    'flower_daisy.png': ['flower-language-builder (花之語)/public/images/flower_daisy.png'],
    'flower_orchid.png': ['flower-language-builder (花之語)/public/images/flower_orchid.png'],

    // 星際拓荒 (Circle the Wagons)
    'pioneer_territory_mining.png': ['circle-wagons-builder (環形馬車)/public/images/territory_mining.png'],
    'pioneer_territory_factory.png': ['circle-wagons-builder (環形馬車)/public/images/territory_factory.png'],
    'pioneer_territory_colony.png': ['circle-wagons-builder (環形馬車)/public/images/territory_colony.png'],
    'pioneer_territory_park.png': ['circle-wagons-builder (環形馬車)/public/images/territory_park.png'],
    'pioneer_target_mine.png': ['circle-wagons-builder (環形馬車)/public/images/target_mine.png'],
    'pioneer_target_diversity.png': ['circle-wagons-builder (環形馬車)/public/images/target_diversity.png'],

    // 三國謀士 (Avignon)
    'three_kingdoms_general_zhuge.png': ['avignon-builder (阿維尼翁)/public/images/general_zhuge.png'],
    'three_kingdoms_general_guo.png': ['avignon-builder (阿維尼翁)/public/images/general_guo.png'],
    'three_kingdoms_general_guan.png': ['avignon-builder (阿維尼翁)/public/images/general_guan.png'],
    'three_kingdoms_general_zhang.png': ['avignon-builder (阿維尼翁)/public/images/general_zhang.png'],
    'three_kingdoms_general_zhao.png': ['avignon-builder (阿維尼翁)/public/images/general_zhao.png'],
    'three_kingdoms_strategy_ambush.png': ['avignon-builder (阿維尼翁)/public/images/strategy_ambush.png'],
    'three_kingdoms_strategy_chain.png': ['avignon-builder (阿維尼翁)/public/images/strategy_chain.png'],
    'three_kingdoms_strategy_spy.png': ['avignon-builder (阿維尼翁)/public/images/strategy_spy.png'],
    'three_kingdoms_strategy_empty.png': ['avignon-builder (阿維尼翁)/public/images/strategy_empty.png'],

    // 粒子獵人 (Pentaquark)
    'quark_up.png': ['pentaquark-builder (五夸克)/public/images/quark_up.png'],
    'quark_down.png': ['pentaquark-builder (五夸克)/public/images/quark_down.png'],
    'quark_strange.png': ['pentaquark-builder (五夸克)/public/images/quark_strange.png'],
    'quark_charm.png': ['pentaquark-builder (五夸克)/public/images/quark_charm.png'],
    'quark_bottom.png': ['pentaquark-builder (五夸克)/public/images/quark_bottom.png'],
    'quark_top.png': ['pentaquark-builder (五夸克)/public/images/quark_top.png'],
    'particle_gluon.png': ['pentaquark-builder (五夸克)/public/images/particle_gluon.png'],

    // 寶箱勇者 (Mini Rogue)
    'hero_card.png': ['mini-rogue-builder (迷你地城)/public/images/hero_card.png'],
    'dungeon_room1.png': ['mini-rogue-builder (迷你地城)/public/images/dungeon_room1.png'],
    'dungeon_room2.png': ['mini-rogue-builder (迷你地城)/public/images/dungeon_room2.png'],
    'dungeon_room3.png': ['mini-rogue-builder (迷你地城)/public/images/dungeon_room3.png'],
    'dungeon_room4.png': ['mini-rogue-builder (迷你地城)/public/images/dungeon_room4.png'],
    'dungeon_room5.png': ['mini-rogue-builder (迷你地城)/public/images/dungeon_room5.png'],
    'dungeon_trap.png': ['mini-rogue-builder (迷你地城)/public/images/dungeon_trap.png'],
    'dungeon_boss.png': ['mini-rogue-builder (迷你地城)/public/images/dungeon_boss.png'],
    'dungeon_victory.png': ['mini-rogue-builder (迷你地城)/public/images/dungeon_victory.png'],

    // 校園躲貓貓大王 (School Hide and Seek - 改編自口袋殭屍)
    'map_classroom.png': ['school-hide-seek-builder (口袋殭屍)/public/images/map_classroom.png'],
    'map_corridor.png': ['school-hide-seek-builder (口袋殭屍)/public/images/map_corridor.png'],
    'map_library.png': ['school-hide-seek-builder (口袋殭屍)/public/images/map_library.png'],
    'map_science_lab.png': ['school-hide-seek-builder (口袋殭屍)/public/images/map_science_lab.png'],
    'map_gym_store.png': ['school-hide-seek-builder (口袋殭屍)/public/images/map_gym_store.png'],
    'map_hallway.png': ['school-hide-seek-builder (口袋殭屍)/public/images/map_hallway.png'],
    'map_courtyard.png': ['school-hide-seek-builder (口袋殭屍)/public/images/map_courtyard.png'],
    'map_health_center.png': ['school-hide-seek-builder (口袋殭屍)/public/images/map_health_center.png'],
    'map_school_gate.png': ['school-hide-seek-builder (口袋殭屍)/public/images/map_school_gate.png'],
    'event_seeker.png': ['school-hide-seek-builder (口袋殭屍)/public/images/event_seeker.png'],
    'event_seeker_squad.png': ['school-hide-seek-builder (口袋殭屍)/public/images/event_seeker_squad.png'],
    'event_safe.png': ['school-hide-seek-builder (口袋殭屍)/public/images/event_safe.png'],
    'event_energy_drink.png': ['school-hide-seek-builder (口袋殭屍)/public/images/event_energy_drink.png'],
    'event_slippery_floor.png': ['school-hide-seek-builder (口袋殭屍)/public/images/event_slippery_floor.png']
};

let copiedCount = 0;

if (!fs.existsSync(srcDir)) {
    console.error(`Source directory does not exist: ${srcDir}`);
    process.exit(1);
}

const files = fs.readdirSync(srcDir);
console.log(`Found ${files.length} files in user_generated_images.`);

for (const file of files) {
    let lowerFile = file.toLowerCase();
    
    // Clean up double extensions like .png.png (Windows often does this if 'hide extensions' is on)
    if (lowerFile.endsWith('.png.png')) {
        lowerFile = lowerFile.slice(0, -4);
    }
    
    if (mapping[lowerFile]) {
        const srcPath = path.join(srcDir, file);
        const targets = mapping[lowerFile];
        for (const relTarget of targets) {
            const targetPath = path.join(baseDir, relTarget);
            const targetDir = path.dirname(targetPath);
            if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir, { recursive: true });
            }
            fs.copyFileSync(srcPath, targetPath);
            console.log(`Copied: ${file} -> ${relTarget}`);
            copiedCount++;
        }
    } else {
        console.log(`No mapping found for file: ${file} (cleaned name: ${lowerFile})`);
    }
}

console.log(`Done! Distributed ${copiedCount} files.`);

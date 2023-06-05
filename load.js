class load extends Phaser.Scene {
    constructor(){
        super('load');
    }
    preload ()
    {
        //global images

        this.load.path = 'assets/';
        this.load.audio('BGM', 'BGM.mp3')
        this.load.audio('titleMusic', 'titleMusic.mp3')
        this.load.image("background", "map.png");
        this.load.image("introScreen", "preTitleScreen.png");
        this.load.spritesheet('OutroGif', 'spritesheet.png', { frameWidth: 1920, frameHeight: 1082 });
        this.load.image("titleScreen", "TitleScreen.png");
        this.load.image('play', 'play.png')

        //logos
        this.load.image('JLogo', 'JEMStudios.png');
        this.load.image('LLogo', 'buggyGames.png');
        this.load.image('MLogo', 'MLogo.png');

        //npcScreen
        this.load.image('player', 'mainCharacter.png');
        this.load.image('NPC', 'npc.png');

    }
    create()
    {
        this.scene.start('intro');
    }
}
    let gameOptions = {
        initialTime: 60
    }

housing = 0;
progress = 0;
NPCmessage = 0;
game1score = 0;
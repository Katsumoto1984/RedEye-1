export const consoleFormatting = {
	reset: '\x1b[0m',
	bold: '\x1b[1m',
	dim: '\x1b[2m',
	underlined: '\x1b[4m',

	//text color

	black: '\x1b[30m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m',

	white: '\x1b[97m',
	lightGray: '\x1b[37m',
	darkGray: '\x1b[90m',

	//background color

	blackBg: '\x1b[40m',
	darkGrayBg: `\x1b[48;5;233m`,
	redBg: '\x1b[41m',
	greenBg: '\x1b[42m',
	yellowBg: '\x1b[43m',
	blueBg: '\x1b[44m',
	magentaBg: '\x1b[45m',
	cyanBg: '\x1b[46m',
	whiteBg: '\x1b[47m',
};
const cf = consoleFormatting;

export const asciiArt = `${cf.redBg}

  ██████╗ ███████╗██████╗ ███████╗██╗   ██╗███████╗
  ██╔══██╗██╔════╝██╔══██╗██╔════╝╚██╗ ██╔╝██╔════╝
  ██████╔╝█████╗  ██║  ██║█████╗   ╚████╔╝ █████╗  
  ██╔══██╗██╔══╝  ██║  ██║██╔══╝    ╚██╔╝  ██╔══╝  
  ██║  ██║███████╗██████╔╝███████╗   ██║   ███████╗
  ╚═╝  ╚═╝╚══════╝╚═════╝ ╚══════╝   ╚═╝   ╚══════╝
${cf.reset}`;

const o = cf.reset + cf.lightGray; // outline
const c = cf.reset + cf.red + cf.bold; // center
const t = cf.reset + cf.white + cf.bold; //cf.red // text

export const asciiArtLogo = `${o}

       /¯¯¯¯¯¯¯¯¯¯\\
      /            \\
  \\¯¯/    /¯¯¯¯\\_--¯
   \\/____/ ${c}/¯¯\\           ${t} __  ___ __   ___    ___${c}  
           \\__/ ${o}/¯¯¯¯/\\   ${t}|__)|__ |  \\ |__ \\ /|__${o}  
      _--¯\\____/    /__\\  ${t}|  \\|___|__/ |___ | |___${o}  
      \\            /
       \\__________/
${cf.reset}`;

export const asciiArtLogo2 = `
     /¯¯¯¯¯¯¯¯¯¯\\                 
    /            \\            
\\¯¯/    /¯¯¯¯\\_--¯        __  ___ __   ___    ___          
 \\/____/  ██  /¯¯¯¯/\\    |__)|__ |  \\ |__ \\ /|__           
    _--¯\\____/    /__\\   |  \\|___|__/ |___ | |___           
    \\            /              
     \\__________/                 

`;

/*


     /¯¯¯¯¯¯¯¯¯¯\\
    /            \\
\\¯¯/    /¯¯¯¯\\_--¯
 \\/____/ /¯¯\\  
         \\__/ /¯¯¯¯/\\
    _--¯\\____/    /__\\
    \\            /
     \\__________/

     /¯¯¯¯¯¯¯¯¯¯¯¯\
    /              \
\¯¯/    /¯¯¯¯¯¯\_--¯
 \/____/  /¯¯\  
          \__/  /¯¯¯¯/\
    _--¯\______/    /__\
    \              /
     \____________/

         ◢◼◼◣
         ◥◼◼◤


     /¯¯¯¯¯¯¯¯¯¯\                 
    /            \            
\¯¯/    /¯¯¯¯\_--¯        __  ___ __   ___    ___          
 \/____/  ██  /¯¯¯¯/\    |__)|__ |  \ |__ \ /|__           
    _--¯\____/    /__\   |  \|___|__/ |___ | |___           
    \            /              
     \__________/                 


     /¯¯¯¯¯¯¯¯¯¯\                 
    /            \        _____          _  ____ 
\¯¯/    /¯¯¯¯\_--¯       |  _  \ ___   _| ||  __|_  _  ___    
 \/____/  ██  /¯¯¯¯/\    |     // ._)/ .` ||  _|| || |/ -_)
    _--¯\____/    /__\   |__|__\\___|\__,_||____|\_, |\___|
    \            /        Red Team C2 Log Viz    |__/      
     \__________/                 


     /¯¯¯¯¯¯¯¯¯¯¯\              
    /             \         
\¯¯/    /¯¯¯¯¯\_--¯       __  ___ __   ___    ___     
 \/____/  (•)  /¯¯¯¯/\   |__)|__ |  \ |__ \ /|__         
    _--¯\_____/    /__\  |  \|___|__/ |___ | |___       
    \             /        
     \___________/          



 ____  _____ ____  ________  _ _____
/  __\/  __//  _ \/  __/\  \///  __/
|  \/||  \  | | \||  \   \  / |  \  
|    /|  /_ | |_/||  /_  / /  |  /_ 
\_/\_\\____\\____/\____\/_/   \____\
                                    

    _______    ________     _______     _______   ________    ________ 
  ╱╱       ╲  ╱        ╲  _╱       ╲  ╱╱       ╲ ╱    ╱   ╲  ╱        ╲
 ╱╱        ╱ ╱         ╱ ╱         ╱ ╱╱        ╱╱         ╱ ╱         ╱
╱        _╱ ╱        _╱ ╱         ╱ ╱        _╱ ╲__      ╱ ╱        _╱ 
╲____╱___╱  ╲________╱  ╲________╱  ╲________╱    ╲_____╱  ╲________╱  

  _____            _  ______             
 |  __ \          | ||  ____|            
 | |__) | ___   __| || |__   _   _   ___ 
 |  _  / / _ \ / _` ||  __| | | | | / _ \
 | | \ \|  __/| (_| || |____| |_| ||  __/
 |_|  \_\\___| \__,_||______|\__, | \___|
                              __/ |      
                             |___/       

(                                
 )\ )       (                     
(()/(   (   )\ )  (   (       (   
 /(_)) ))\ (()/(  )\  )\ )   ))\  
(_))  /((_) ((_))((_)(()/(  /((_) 
| _ \(_))   _| | | __|)(_))(_))   
|   // -_)/ _` | | _|| || |/ -_)  
|_|_\\___|\__,_| |___|\_, |\___|  
                      |__/      

 _____          _  ____ 
|  _  \ ___   _| ||  __|_  _  ___    
|     // ._)/ .` ||  _|| || |/ -_)
|__|__\\___|\__,_||____|\_, |\___|
 Red Team C2 Log Viz    |__/      

                   
|¯¯¯¯¯\ ___   _|¯||¯¯¯¯|_  _  ___    
|  ^  // ._)/ .` ||  ¯|| || |/ -_)
|__|__\\___|\__,_||____|\_, |\___|
 Red Team C2 Log Viz    |__/      

 ____  ____  ____  ____  _  _  ____ 
(  _ \(  __)(    \(  __)( \/ )(  __)
 )   / ) _)  ) D ( ) _)  )  /  ) _) 
(__\_)(____)(____/(____)(__/  (____)


                                  
 _____         _  ____           
|  __ | ___  _| ||  __| _ _  ___ 
|    -|| -_|| . ||  _| | | || -_|
|__|__||___||___||____||_  ||___|
                       |___|     

 _____         _  ____           
|  __ | ___  _| ||  __| _ _  ___ 
|    -|| -_|| . ||  _| | | || -_|
|__\__||___/|___||____||_  ||___/
                       |__/                            


    ____             __ ______           
   / __ \ ___   ____/ // ____/__  __ ___ 
  / /_/ // _ \ / __  // __/  / / / // _ \
 / _, _//  __// /_/ // /___ / /_/ //  __/
/_/ |_| \___/ \__,_//_____/ \__, / \___/ 
                           /____/        



   ___           __ ____          
  / _ \ ___  ___/ // __/__ __ ___ 
 / , _// -_)/ _  // _/ / // // -_)
/_/|_| \__/ \_,_//___/ \_, / \__/ 
                      /___/       


██████  ███████ ██████  ███████ ██    ██ ███████ 
██   ██ ██      ██   ██ ██       ██  ██  ██      
██████  █████   ██   ██ █████     ████   █████   
██   ██ ██      ██   ██ ██         ██    ██      
██   ██ ███████ ██████  ███████    ██    ███████ 


 _        __      
|_) _  _||_     _ 
| \(/_(_||__ \/(/_
             / 

 ___         _  ___           
| . \ ___  _| || __> _ _  ___ 
|   // ._>/ . || _> | | |/ ._>
|_\_\\___.\___||___>`_. |\___.
                    <___'     


 __  ___ __   ___    ___ 
|__)|__ |  \ |__ \ /|__  
|  \|___|__/ |___ | |___ 
                             

 ______              _  _______               
(_____ \            | |(_______)              
 _____) )  ____   _ | | _____    _   _   ____ 
(_____ (  / _  ) / || ||  ___)  | | | | / _  )
      | |( (/ / ( (_| || |_____ | |_| |( (/ / 
      |_| \____) \____||_______) \__  | \____)
                                (____/        


 ______             _  _______              
(_____ \           | |(_______)             
 _____) )  ____  _ | | _____   _   _   ____ 
(_____ (  / _  )/ || ||  ___) | | | | / _  )
      | |( (/ /( (_| || |_____| |_| |( (/ / 
      |_| \____)\____||_______)\__  | \____)
                              (____/        


 ______           _ _______            
(_____ \         | (_______)           
 _____) ) ____ _ | |_____  _   _  ____ 
(_____ ( / _  ) || |  ___)| | | |/ _  )
      | ( (/ ( (_| | |____| |_| ( (/ / 
      |_|\____)____|_______)__  |\____)
                          (____/       


 __       __     
|__)_ _| |_    _ 
| \(-(_| |__\/(- 
            /    


*/

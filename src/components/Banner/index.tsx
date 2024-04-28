import List from './List';
import styles from './styles.module.css';


function HeroBanner(){
    const menu = [
        {
            option: 'Personagens'
        },
        {
            option: 'Akuma No Mi'
        },
        {
            option: 'Mapa'
        },
        {
            option: 'Sobre'
        }
    ];

    return(
        <header className={styles.hero}>
            <nav className={styles.hero__nav}>
                <img className={styles["hero__nav-logo"]} src="../../public/onePiece-logo.png" alt="Logo One Piece caveira com o chapéu de palha" />
                <ul className={styles["hero__nav-list"]}>
                    {menu.map((option, index) =>(
                        <List 
                            key={index}
                            {...option}
                        />
                    ))}
                </ul>
            </nav>
        </header>
    )    
}


export default  HeroBanner
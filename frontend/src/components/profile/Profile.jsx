import styles from './Profile.module.css';
import { users } from '../../data/users.js';
import { useThemeData } from '../../contexts/ThemeDataContext.jsx';

export default function Profile() {

    const { selectedThemeData } = useThemeData();
    const user = users[0];

    return(
        <div className={styles.profileContainer}>
            <div className={styles.profileInner}>
                <div className={styles.profileLeft}>
                    <div className={styles.userNameContainer}>{user.nickname}</div>
                    <div className={styles.userNameDesc}>{selectedThemeData.userNameDesc}</div>
                </div>
                <div className={styles.profileRight}>
                    <div className={styles.rightHeader}>
                        <div className={styles.headerLeft}>{selectedThemeData.headerLeft}</div>
                        <div className={styles.headerRight}>
                            <div className={styles.birthDate}>{user.birthDate}</div>
                            <div className={styles.birthDateTitle}>DATE</div>
                        </div>
                    </div>
                    <div className={styles.rightDesc}>
                        <div className={styles.sectionName}>
                            <div className={styles.titleId}>{selectedThemeData.titleId}</div>
                            <div className={styles.titleDesc}>{selectedThemeData.titleDesc}</div>
                        </div>
                    </div>
                    <div className={styles.rightBody}>
                        <div className={styles.bodyInfo}>
                            <div className={styles.infoUp}>
                                <div className={styles.infoSubLeft}>
                                    <div className={styles.name}>{`${user.name} ${user.surname}`}</div>
                                    <div className={styles.nameTitle}>NAME</div>
                                </div>
                                <div className={styles.infoSubRight}>
                                    <div className={styles.role}>{user.role}</div>
                                    <div className={styles.roleTitle}>TITLE</div>
                                </div>
                            </div>
                            <div className={styles.infoDown}>
                                <div className={styles.infoSub}>
                                    <div className={styles.email}>{user.email}</div>
                                    <div className={styles.emailTitle}>MAIL</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className={styles.bodyPicture}>
                        <div className={styles.imgContainer}>
                           <img src="/imgs/kitsuLogo.png" alt="user avatar" /> 
                        </div>
                    </div>
            </div>
        </div>
    );
}
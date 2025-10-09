import styles from './Calendar.module.css';
import dayjs from 'dayjs';
import DayCell from './DayCell';

export default function Calendar() {

    const todayObject = dayjs();
    const today = todayObject.format('ddd.MM.YYYY');
    const dayCount = todayObject.daysInMonth();

    console.log(today, dayCount);
    return(
        <div className={styles.calendarContainer}>
            <div className={styles.calendarInner}>
                <div className={styles.calendarHeader}>
                    <div className={styles.headerDetails}>
                        {today}
                    </div>
                    <div className={styles.navigationContainer}>
                        <div className={styles.prevWeekButton}>&lt;</div>
                        <div className={styles.nextWeekButton}>&gt;</div>
                    </div>
                </div>
                <div className={styles.calendarBody}>
                    <div className={styles.bodyHeader}>
                        <div className={styles.headerElement}>Sat</div>
                        <div className={styles.headerElement}>Sun</div>
                        <div className={styles.headerElement}>Mon</div>
                        <div className={styles.headerElement}>Tue</div>
                        <div className={styles.headerElement}>Wed</div>
                        <div className={styles.headerElement}>Thu</div>
                        <div className={styles.headerElement}>Fri</div>
                    </div>
                    <div className={styles.bodyContent}>
                        {
                            Array.from({length: dayCount}, (day, index) => {
                                return <DayCell key={index} dayNumber={index + 1} eventCount={2} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
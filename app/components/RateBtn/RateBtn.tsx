import styles from "./RateBtn.module.scss";

interface Props {
    readonly ratingId: string;
    readonly ratingValue: string;
    readonly isChecked: boolean;
    readonly onUserChoice: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RateBtn: React.FunctionComponent<Props> = ({
    ratingId,
    ratingValue,
    isChecked,
    onUserChoice
}) => {
    return (
        <div className={styles.choice_container}>
            <input
                type="radio"
                id={ratingId}
                name="rating"
                value={ratingValue}
                checked={isChecked}
                onChange={onUserChoice}
            />
            <label htmlFor={ratingId}>{ratingValue}</label>
        </div>
    );
};

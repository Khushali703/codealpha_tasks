import css from "../css/certificates.module.css";

const Certificates = () => {
  return (
    <div className={css.container}>
      <h2 className={css.heading}>My Certificates</h2>
      <div className={css.grid}>
        <div className={css.card}>
          <img
            src="/images/javascript certificate.jpeg"
            alt="JavaScript Certificate"
            className={css.image}
          />
          <h3 className={css.title}>JavaScript Certificate</h3>
        </div>
        <div className={css.card}>
          <img
            src="/images/react js certificate.jpeg"
            alt="React JS Certificate"
            className={css.image}
          />
          <h3 className={css.title}>React JS Certificate</h3>
        </div>
      </div>
    </div>
  );
};

export default Certificates;

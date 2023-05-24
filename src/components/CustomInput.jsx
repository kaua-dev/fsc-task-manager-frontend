const CustomInput = ({ label, value }) => {
    <div className="custom-input-container">
        <input type="text" className="custom-input" />

        {label ? (
            <label className={`${value.length > 0 ? "shrink" : ""}`}></label>
        ) : null}
    </div>;
};

export default CustomInput;

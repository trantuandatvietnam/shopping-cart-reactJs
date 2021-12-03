import React from 'react';

Colors.propTypes = {

};

function Colors({ colors }) {
    return (
        <div className="colors">
            {colors.map((color, index) => (
                <button key={index} style={{ background: color }} />
            ))}
        </div>
    );
}

export default Colors;
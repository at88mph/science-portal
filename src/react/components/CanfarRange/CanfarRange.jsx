import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import './CanfarRange.css';

function CanfarRange({
    value,
    range, onChange
                     }) {
    const initialValue = range.findIndex( (el) => parseInt(el) === parseInt(value)) || 0
    const [rangePos, setRangePos] = useState(initialValue)
    const handleChange = (e) => {
        onChange(parseInt(range[e.target.value]))
        setRangePos(parseInt(e.target.value))
    }

    React.useEffect(() => {
        if (value) {
            const newRangePos = range.findIndex( (el) => parseInt(el) === parseInt(value)) || 0
            console.debug(`Setting range pos to ${newRangePos} for value ${value}`)
            setRangePos(parseInt(newRangePos))
        }

    }, [value, range, setRangePos])
    console.debug('value', value, range, rangePos)

    // Calculate percentage for the gradient
    const percentage = ((rangePos) / (range.length - 1)) * 100;

    return (
        <Form.Range
            value={rangePos}
            name="range-slider"
            min={0}
            max={range.length - 1}
            step="1"
            onChange={handleChange}
            className="canfar-range"
            style={{ '--value-percent': `${percentage}%` }}
        />
    )

}

export default CanfarRange;
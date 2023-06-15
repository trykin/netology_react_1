import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";

export function Calendar() {
  const currentDate = new Date();

  const [date, setDate] = useState<string>(
    currentDate.toISOString().split("T")[0]
  );
  const [time, setTime] = useState<string>(currentDate.toLocaleTimeString());

  return (
    <>
      <FloatingLabel controlId="floatingInput" label="Время" className="mb-3">
        <Form.Control
          value={time}
          type="time"
          placeholder="Время"
          onChange={(e) => setTime(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Дата" className="mb-3">
        <Form.Control
          value={date}
          type="date"
          placeholder="Дата"
          onChange={(e) => setDate(e.target.value)}
        />
      </FloatingLabel>
    </>
  );
}

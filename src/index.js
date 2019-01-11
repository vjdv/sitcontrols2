import CSelect from "./components/cselect";
import SCSelect from "./components/scselect";
import Calendar from "./components/calendar";
import DatePicker from "./components/datepicker";
import Clock from "./components/clock";
import DateTimePicker from "./components/datetimepicker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

library.add(faCheck, faPencilAlt, faClock);

export { CSelect, SCSelect, Calendar, DatePicker, Clock, DateTimePicker };

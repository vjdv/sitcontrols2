import CSelect from "./components/cselect";
import SCSelect from "./components/scselect";
import Calendar from "./components/calendar";
import DatePicker from "./components/datepicker";
import Clock from "./components/clock";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faCheck, faPencilAlt);

export { CSelect, SCSelect, Calendar, DatePicker, Clock };

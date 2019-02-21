import CSelect from "./components/cselect";
import Calendar from "./components/calendar";
import DatePicker from "./components/datepicker";
import Clock from "./components/clock";
import DateTimePicker from "./components/datetimepicker";
import List from "./components/list";
import Selection from "./components/selection";
import Input from "./components/input";
import NumberInput from "./components/numberinput";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

library.add(faCheck, faPencilAlt, faClock);

export { CSelect, Calendar, DatePicker, Clock, DateTimePicker, List, Selection, Input, NumberInput };

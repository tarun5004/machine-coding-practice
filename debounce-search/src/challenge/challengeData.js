import LoginPage from "./01-login-page/LoginPage";
import ContactForm from "./02-contact-form/ContactForm";
import FormValidation from "./03-form-validation/FormValidation";
import ParentChildLayout from "./04-parent-child-layout/ParentChildLayout";
import Accordion from "./05-accordion/Accordion";
import TodoApp from "./06-todo-app/TodoApp";
import Counter from "./07-counter/Counter";
import SearchFilter from "./08-search-filter/SearchFilter";
import DynamicTable from "./09-dynamic-table/DynamicTable";
import Pagination from "./10-pagination/Pagination";
import Tabs from "./11-tabs/Tabs";
import Modal from "./12-modal/Modal";
import ApiDataDisplay from "./13-api-data-display/ApiDataDisplay";
import DebouncedSearch from "./14-debounced-search/DebouncedSearch";

export const challenges = [
  { id: "01-login-page", number: "01", name: "Login Page", category: "Forms", difficulty: "Easy", description: "Email and password validation with show/hide support.", Component: LoginPage },
  { id: "02-contact-form", number: "02", name: "Contact Form", category: "Forms", difficulty: "Easy", description: "Validated contact fields and submission feedback.", Component: ContactForm },
  { id: "03-form-validation", number: "03", name: "Form Validation", category: "Forms", difficulty: "Easy-Medium", description: "Registration form with matching password rules.", Component: FormValidation },
  { id: "04-parent-child-layout", number: "04", name: "Parent / Child Layout", category: "Layout", difficulty: "Easy", description: "Responsive horizontal and vertical Flexbox centering.", Component: ParentChildLayout },
  { id: "05-accordion", number: "05", name: "Accordion", category: "React UI", difficulty: "Easy", description: "Accessible single-open answer panels.", Component: Accordion },
  { id: "06-todo-app", number: "06", name: "Todo App", category: "React UI", difficulty: "Easy-Medium", description: "CRUD, filters, completion, and localStorage.", Component: TodoApp },
  { id: "07-counter", number: "07", name: "Counter", category: "React UI", difficulty: "Easy", description: "Increment, decrement, reset, and lower boundary.", Component: Counter },
  { id: "08-search-filter", number: "08", name: "Search + Filter", category: "Data/UI", difficulty: "Easy-Medium", description: "Combined text search and category filtering.", Component: SearchFilter },
  { id: "09-dynamic-table", number: "09", name: "Dynamic Table", category: "Data/UI", difficulty: "Easy-Medium", description: "Mapped rows with search and sorting.", Component: DynamicTable },
  { id: "10-pagination", number: "10", name: "Pagination", category: "Data/UI", difficulty: "Easy-Medium", description: "Page numbers, previous/next, and disabled edges.", Component: Pagination },
  { id: "11-tabs", number: "11", name: "Tabs", category: "React UI", difficulty: "Easy", description: "State-based accessible tab content.", Component: Tabs },
  { id: "12-modal", number: "12", name: "Modal", category: "React UI", difficulty: "Easy-Medium", description: "Overlay and Escape-key close behavior.", Component: Modal },
  { id: "13-api-data-display", number: "13", name: "API Data Display", category: "API", difficulty: "Easy-Medium", description: "Complete fetch loading, error, empty, and success states.", Component: ApiDataDisplay },
  { id: "14-debounced-search", number: "14", name: "Debounced Search", category: "API", difficulty: "Easy-Medium", description: "Real useEffect debounce with timeout cleanup.", Component: DebouncedSearch },
];

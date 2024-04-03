The provided code illustrates a React application utilizing Material-UI's DataGrid component to display a list of rows, along with functionalities for editing, copying, and handling modal dialogs for user inputs. This implementation makes use of React hooks for state management and components from both Material-UI core and Material-UI base packages to build a user interface that allows interaction with the data presented in the DataGrid. Here's a breakdown of the code's implementation:

### `App` Component
- **State Initialization**: Initializes the state with default rows for the DataGrid, and variables to control modal visibility (`openModal`), the row currently being edited or copied (`editableRow`), and the mode of the modal (`modalMode`).
- **Event Handlers**: Implements functions to handle actions such as `handleCopy`, `handleEdit`, `handleClose`, `handleChange`, `handleSubmit`, and `handleSave`. These functions perform actions like setting the current row for editing or copying, opening or closing the modal, updating the editable row's information, adding a new row, or saving edits to an existing row.
- **Columns Configuration**: Uses a custom `DataGridColumns` component to configure columns for the DataGrid, including custom renderers for "Copy" and "Edit" action buttons.
- **Rendering**: Renders the `DataGrid` with the configured columns and rows, and the `ManualDrawer` component which acts as a modal dialog for editing or copying rows.

### `DataGridColumns` Component
- **Props**: Receives `handleCopy` and `handleEdit` functions as props.
- **Column Configuration**: Returns an array of objects defining the columns for the DataGrid. This includes columns for "ID", "Name", "Address", and two action columns for "Copy" and "Edit", each with a button that triggers the respective handler function passed as props.

### `ManualDrawer` Component
- **Props**: Receives several props to control its behavior, including `openModal`, `handleClose`, `handleChange`, `editableRow`, `handleSubmit`, `modalMode`, and `handleSave`.
- **Dialog Setup**: Utilizes Material-UI's `Dialog` component to create a modal that is controlled by the `openModal` prop. The dialog title changes based on the `modalMode` to indicate whether the user is creating a copy of a row or editing an existing row.
- **Form Fields**: Contains `TextField` components for "Name" and "Address", which display and update values based on the `editableRow` state.
- **Actions**: Provides buttons for "Cancel", "Save", or "Submit", depending on the `modalMode`. These buttons are linked to `handleClose`, `handleSave`, or `handleSubmit` functions to perform their respective actions.

This code demonstrates a practical use of React functional components, hooks for state management, and Material-UI components to create a dynamic and interactive data management UI. The separation of concerns among different components enhances reusability and maintainability of the code.

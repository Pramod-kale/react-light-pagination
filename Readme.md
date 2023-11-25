# ReactLightPagination

Welcome to ReactLightPagination! This is a simple React pagination component that you can easily integrate into your projects. This component provides a clean and customizable way to handle paginated data in your React applications.

## Installation

To install the ReactLightPagination package, simply run the following command:

```bash
npm install react-light-pagination
```

## Usage

Here's a quick guide on how to use the ReactLightPagination component in your React application:

```jsx
import React from 'react';
import Pagination from 'react-light-pagination';
import 'react-light-pagination/dist/Pagination.css'; // Import the default styles

const YourComponent = () => {
  // Your data and event handlers go here

  return (
    <Pagination
      totalNumberOfData={/* Total number of data items */}
      perPage={/* Number of items per page */}
      currentPage={/* Current page number */}
      nextClickHandler={/* Your custom next button click handler */}
      previousClickHandler={/* Your custom previous button click handler */}
      pageClickHandler={/* Your custom page click handler */}
      classNames={{
        container: /* Your custom class for the pagination container */,
        previousButton: /* Your custom class for the previous button */,
        nextButton: /* Your custom class for the next button */,
        pageContainer: /* Your custom class for the page container */,
        pageButton: /* Your custom class for each page button */,
        pageActiveButton: /* Your custom class for the active page button */,
        buttons: /* Your custom class for common button styles */,
      }}
      components={{
        previousButton: /* Your custom ReactNode for the previous button */,
        nextButton: /* Your custom ReactNode for the next button */,
        pageButton: /* Your custom ReactNode for each page button */,
      }}
      inlineStyles={{
        container: /* Your custom inline styles for the pagination container */,
        previousButton: /* Your custom inline styles for the previous button */,
        nextButton: /* Your custom inline styles for the next button */,
        pageContainer: /* Your custom inline styles for the page container */,
        pageButton: /* Your custom inline styles for each page button */,
        pageActiveButton: /* Your custom inline styles for the active page button */,
        buttons: /* Your custom inline styles for common button styles */,
      }}
    />
  );
};

export default YourComponent;
```

## Styling

The default styles for the pagination component are provided in the `Pagination.css` file. You can customize the appearance of the component by overriding these styles or by providing your own styles using the `classNames` and `inlineStyles` props.

Feel free to explore and modify the styles in the `Pagination.scss` file to match your project's design.

## Notes for Issues

If you encounter any issues or have suggestions for improvement, please don't hesitate to open an issue on the [GitHub repository](#https://github.com/Pramod-kale/react-light-pagination/issues).

Happy coding!
// Get HTML elements
const METER = document.querySelector('.meter');
const FILL = document.querySelector('.fill');
const STORAGE_USED_DISPLAY = document.querySelector('.storage-used-value');
const STORAGE_REMAINING_DISPLAY = document.querySelector('.storage-remaining-value');

// (Hypothetically) get 'max storage' and 'storage used' values from CPU...
let maxStorage = 1000;
let storageUsedValue = Math.ceil(814.78);

// ...and set these values on the meter using the appropriate aria attributes
METER.setAttribute('aria-valuemax', maxStorage);
METER.setAttribute('aria-valuenow', storageUsedValue);

// Display 'storage used' value
STORAGE_USED_DISPLAY.textContent = storageUsedValue + ' GB';

// Calculate and display 'storage remaining' value
STORAGE_REMAINING_DISPLAY.textContent = maxStorage - storageUsedValue;

// Calculate width of fill in relation to meter
FILL.style.width = (storageUsedValue / maxStorage * 100) + '%';

// If more than 90% of storage is used...
if ((storageUsedValue / maxStorage * 100) > 90) {
    // Give the 'storage remaining' figure a reddish hue
    STORAGE_REMAINING_DISPLAY.style.color = 'hsl(345, 100%, 65%)'
}
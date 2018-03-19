/*
 * @fileoverview Test helpers.
 *
 * The modules imported here may have side effects and the import order is
 * important.
 */
import './react-warnings.js';
import { afterEach, unmount } from '../suite';

// Unmount the currently mounted component after each test.
afterEach(function() {
  unmount();
});

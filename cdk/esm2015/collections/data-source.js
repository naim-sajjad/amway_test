/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/collections/data-source.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @abstract
 * @template T
 */
export class DataSource {
}
if (false) {
    /**
     * Connects a collection viewer (such as a data-table) to this data source. Note that
     * the stream provided will be accessed during change detection and should not directly change
     * values that are bound in template views.
     * @abstract
     * @param {?} collectionViewer The component that exposes a view over the data provided by this
     *     data source.
     * @return {?} Observable that emits a new value when the data changes.
     */
    DataSource.prototype.connect = function (collectionViewer) { };
    /**
     * Disconnects a collection viewer (such as a data-table) from this data source. Can be used
     * to perform any clean-up or tear-down operations when a view is being destroyed.
     *
     * @abstract
     * @param {?} collectionViewer The component that exposes a view over the data provided by this
     *     data source.
     * @return {?}
     */
    DataSource.prototype.disconnect = function (collectionViewer) { };
}
/**
 * Checks whether an object is a data source.
 * @param {?} value
 * @return {?}
 */
export function isDataSource(value) {
    // Check if the value is a DataSource by observing if it has a connect function. Cannot
    // be checked as an `instanceof DataSource` since people could create their own sources
    // that match the interface, but don't extend DataSource.
    return value && typeof value.connect === 'function';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2NvbGxlY3Rpb25zL2RhdGEtc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQSxNQUFNLE9BQWdCLFVBQVU7Q0FtQi9COzs7Ozs7Ozs7OztJQVZDLCtEQUF5Rjs7Ozs7Ozs7OztJQVN6RixrRUFBOEQ7Ozs7Ozs7QUFJaEUsTUFBTSxVQUFVLFlBQVksQ0FBQyxLQUFVO0lBQ3JDLHVGQUF1RjtJQUN2Rix1RkFBdUY7SUFDdkYseURBQXlEO0lBQ3pELE9BQU8sS0FBSyxJQUFJLE9BQU8sS0FBSyxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUM7QUFDdEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtDb2xsZWN0aW9uVmlld2VyfSBmcm9tICcuL2NvbGxlY3Rpb24tdmlld2VyJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERhdGFTb3VyY2U8VD4ge1xuICAvKipcbiAgICogQ29ubmVjdHMgYSBjb2xsZWN0aW9uIHZpZXdlciAoc3VjaCBhcyBhIGRhdGEtdGFibGUpIHRvIHRoaXMgZGF0YSBzb3VyY2UuIE5vdGUgdGhhdFxuICAgKiB0aGUgc3RyZWFtIHByb3ZpZGVkIHdpbGwgYmUgYWNjZXNzZWQgZHVyaW5nIGNoYW5nZSBkZXRlY3Rpb24gYW5kIHNob3VsZCBub3QgZGlyZWN0bHkgY2hhbmdlXG4gICAqIHZhbHVlcyB0aGF0IGFyZSBib3VuZCBpbiB0ZW1wbGF0ZSB2aWV3cy5cbiAgICogQHBhcmFtIGNvbGxlY3Rpb25WaWV3ZXIgVGhlIGNvbXBvbmVudCB0aGF0IGV4cG9zZXMgYSB2aWV3IG92ZXIgdGhlIGRhdGEgcHJvdmlkZWQgYnkgdGhpc1xuICAgKiAgICAgZGF0YSBzb3VyY2UuXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGUgdGhhdCBlbWl0cyBhIG5ldyB2YWx1ZSB3aGVuIHRoZSBkYXRhIGNoYW5nZXMuXG4gICAqL1xuICBhYnN0cmFjdCBjb25uZWN0KGNvbGxlY3Rpb25WaWV3ZXI6IENvbGxlY3Rpb25WaWV3ZXIpOiBPYnNlcnZhYmxlPFRbXSB8IFJlYWRvbmx5QXJyYXk8VD4+O1xuXG4gIC8qKlxuICAgKiBEaXNjb25uZWN0cyBhIGNvbGxlY3Rpb24gdmlld2VyIChzdWNoIGFzIGEgZGF0YS10YWJsZSkgZnJvbSB0aGlzIGRhdGEgc291cmNlLiBDYW4gYmUgdXNlZFxuICAgKiB0byBwZXJmb3JtIGFueSBjbGVhbi11cCBvciB0ZWFyLWRvd24gb3BlcmF0aW9ucyB3aGVuIGEgdmlldyBpcyBiZWluZyBkZXN0cm95ZWQuXG4gICAqXG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uVmlld2VyIFRoZSBjb21wb25lbnQgdGhhdCBleHBvc2VzIGEgdmlldyBvdmVyIHRoZSBkYXRhIHByb3ZpZGVkIGJ5IHRoaXNcbiAgICogICAgIGRhdGEgc291cmNlLlxuICAgKi9cbiAgYWJzdHJhY3QgZGlzY29ubmVjdChjb2xsZWN0aW9uVmlld2VyOiBDb2xsZWN0aW9uVmlld2VyKTogdm9pZDtcbn1cblxuLyoqIENoZWNrcyB3aGV0aGVyIGFuIG9iamVjdCBpcyBhIGRhdGEgc291cmNlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0YVNvdXJjZSh2YWx1ZTogYW55KTogdmFsdWUgaXMgRGF0YVNvdXJjZTxhbnk+IHtcbiAgLy8gQ2hlY2sgaWYgdGhlIHZhbHVlIGlzIGEgRGF0YVNvdXJjZSBieSBvYnNlcnZpbmcgaWYgaXQgaGFzIGEgY29ubmVjdCBmdW5jdGlvbi4gQ2Fubm90XG4gIC8vIGJlIGNoZWNrZWQgYXMgYW4gYGluc3RhbmNlb2YgRGF0YVNvdXJjZWAgc2luY2UgcGVvcGxlIGNvdWxkIGNyZWF0ZSB0aGVpciBvd24gc291cmNlc1xuICAvLyB0aGF0IG1hdGNoIHRoZSBpbnRlcmZhY2UsIGJ1dCBkb24ndCBleHRlbmQgRGF0YVNvdXJjZS5cbiAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5jb25uZWN0ID09PSAnZnVuY3Rpb24nO1xufVxuIl19
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Gets a mutable version of an element's bounding `ClientRect`. */
export function getMutableClientRect(element) {
    var clientRect = element.getBoundingClientRect();
    // We need to clone the `clientRect` here, because all the values on it are readonly
    // and we need to be able to update them. Also we can't use a spread here, because
    // the values on a `ClientRect` aren't own properties. See:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
    return {
        top: clientRect.top,
        right: clientRect.right,
        bottom: clientRect.bottom,
        left: clientRect.left,
        width: clientRect.width,
        height: clientRect.height
    };
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param clientRect ClientRect that is being checked.
 * @param x Coordinates along the X axis.
 * @param y Coordinates along the Y axis.
 */
export function isInsideClientRect(clientRect, x, y) {
    var top = clientRect.top, bottom = clientRect.bottom, left = clientRect.left, right = clientRect.right;
    return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param clientRect `ClientRect` that should be updated.
 * @param top Amount to add to the `top` position.
 * @param left Amount to add to the `left` position.
 */
export function adjustClientRect(clientRect, top, left) {
    clientRect.top += top;
    clientRect.bottom = clientRect.top + clientRect.height;
    clientRect.left += left;
    clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Checks whether the pointer coordinates are close to a ClientRect.
 * @param rect ClientRect to check against.
 * @param threshold Threshold around the ClientRect.
 * @param pointerX Coordinates along the X axis.
 * @param pointerY Coordinates along the Y axis.
 */
export function isPointerNearClientRect(rect, threshold, pointerX, pointerY) {
    var top = rect.top, right = rect.right, bottom = rect.bottom, left = rect.left, width = rect.width, height = rect.height;
    var xThreshold = width * threshold;
    var yThreshold = height * threshold;
    return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
        pointerX > left - xThreshold && pointerX < right + xThreshold;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXJlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2RyYWctZHJvcC9jbGllbnQtcmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxvRUFBb0U7QUFDcEUsTUFBTSxVQUFVLG9CQUFvQixDQUFDLE9BQWdCO0lBQ25ELElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBRW5ELG9GQUFvRjtJQUNwRixrRkFBa0Y7SUFDbEYsMkRBQTJEO0lBQzNELHVGQUF1RjtJQUN2RixPQUFPO1FBQ0wsR0FBRyxFQUFFLFVBQVUsQ0FBQyxHQUFHO1FBQ25CLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztRQUN2QixNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU07UUFDekIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJO1FBQ3JCLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztRQUN2QixNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU07S0FDMUIsQ0FBQztBQUNKLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxVQUFzQixFQUFFLENBQVMsRUFBRSxDQUFTO0lBQ3RFLElBQUEsb0JBQUcsRUFBRSwwQkFBTSxFQUFFLHNCQUFJLEVBQUUsd0JBQUssQ0FBZTtJQUM5QyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUM7QUFDNUQsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLGdCQUFnQixDQUFDLFVBQXNCLEVBQUUsR0FBVyxFQUFFLElBQVk7SUFDaEYsVUFBVSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUM7SUFDdEIsVUFBVSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFFdkQsVUFBVSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7SUFDeEIsVUFBVSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7QUFDeEQsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxJQUFnQixFQUNoQixTQUFpQixFQUNqQixRQUFnQixFQUNoQixRQUFnQjtJQUMvQyxJQUFBLGNBQUcsRUFBRSxrQkFBSyxFQUFFLG9CQUFNLEVBQUUsZ0JBQUksRUFBRSxrQkFBSyxFQUFFLG9CQUFNLENBQVM7SUFDdkQsSUFBTSxVQUFVLEdBQUcsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUNyQyxJQUFNLFVBQVUsR0FBRyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBRXRDLE9BQU8sUUFBUSxHQUFHLEdBQUcsR0FBRyxVQUFVLElBQUksUUFBUSxHQUFHLE1BQU0sR0FBRyxVQUFVO1FBQzdELFFBQVEsR0FBRyxJQUFJLEdBQUcsVUFBVSxJQUFJLFFBQVEsR0FBRyxLQUFLLEdBQUcsVUFBVSxDQUFDO0FBQ3ZFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqIEdldHMgYSBtdXRhYmxlIHZlcnNpb24gb2YgYW4gZWxlbWVudCdzIGJvdW5kaW5nIGBDbGllbnRSZWN0YC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNdXRhYmxlQ2xpZW50UmVjdChlbGVtZW50OiBFbGVtZW50KTogQ2xpZW50UmVjdCB7XG4gIGNvbnN0IGNsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIC8vIFdlIG5lZWQgdG8gY2xvbmUgdGhlIGBjbGllbnRSZWN0YCBoZXJlLCBiZWNhdXNlIGFsbCB0aGUgdmFsdWVzIG9uIGl0IGFyZSByZWFkb25seVxuICAvLyBhbmQgd2UgbmVlZCB0byBiZSBhYmxlIHRvIHVwZGF0ZSB0aGVtLiBBbHNvIHdlIGNhbid0IHVzZSBhIHNwcmVhZCBoZXJlLCBiZWNhdXNlXG4gIC8vIHRoZSB2YWx1ZXMgb24gYSBgQ2xpZW50UmVjdGAgYXJlbid0IG93biBwcm9wZXJ0aWVzLiBTZWU6XG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L2dldEJvdW5kaW5nQ2xpZW50UmVjdCNOb3Rlc1xuICByZXR1cm4ge1xuICAgIHRvcDogY2xpZW50UmVjdC50b3AsXG4gICAgcmlnaHQ6IGNsaWVudFJlY3QucmlnaHQsXG4gICAgYm90dG9tOiBjbGllbnRSZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBjbGllbnRSZWN0LmxlZnQsXG4gICAgd2lkdGg6IGNsaWVudFJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiBjbGllbnRSZWN0LmhlaWdodFxuICB9O1xufVxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHNvbWUgY29vcmRpbmF0ZXMgYXJlIHdpdGhpbiBhIGBDbGllbnRSZWN0YC5cbiAqIEBwYXJhbSBjbGllbnRSZWN0IENsaWVudFJlY3QgdGhhdCBpcyBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHggQ29vcmRpbmF0ZXMgYWxvbmcgdGhlIFggYXhpcy5cbiAqIEBwYXJhbSB5IENvb3JkaW5hdGVzIGFsb25nIHRoZSBZIGF4aXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0luc2lkZUNsaWVudFJlY3QoY2xpZW50UmVjdDogQ2xpZW50UmVjdCwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgY29uc3Qge3RvcCwgYm90dG9tLCBsZWZ0LCByaWdodH0gPSBjbGllbnRSZWN0O1xuICByZXR1cm4geSA+PSB0b3AgJiYgeSA8PSBib3R0b20gJiYgeCA+PSBsZWZ0ICYmIHggPD0gcmlnaHQ7XG59XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgdG9wL2xlZnQgcG9zaXRpb25zIG9mIGEgYENsaWVudFJlY3RgLCBhcyB3ZWxsIGFzIHRoZWlyIGJvdHRvbS9yaWdodCBjb3VudGVycGFydHMuXG4gKiBAcGFyYW0gY2xpZW50UmVjdCBgQ2xpZW50UmVjdGAgdGhhdCBzaG91bGQgYmUgdXBkYXRlZC5cbiAqIEBwYXJhbSB0b3AgQW1vdW50IHRvIGFkZCB0byB0aGUgYHRvcGAgcG9zaXRpb24uXG4gKiBAcGFyYW0gbGVmdCBBbW91bnQgdG8gYWRkIHRvIHRoZSBgbGVmdGAgcG9zaXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RDbGllbnRSZWN0KGNsaWVudFJlY3Q6IENsaWVudFJlY3QsIHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIpIHtcbiAgY2xpZW50UmVjdC50b3AgKz0gdG9wO1xuICBjbGllbnRSZWN0LmJvdHRvbSA9IGNsaWVudFJlY3QudG9wICsgY2xpZW50UmVjdC5oZWlnaHQ7XG5cbiAgY2xpZW50UmVjdC5sZWZ0ICs9IGxlZnQ7XG4gIGNsaWVudFJlY3QucmlnaHQgPSBjbGllbnRSZWN0LmxlZnQgKyBjbGllbnRSZWN0LndpZHRoO1xufVxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBwb2ludGVyIGNvb3JkaW5hdGVzIGFyZSBjbG9zZSB0byBhIENsaWVudFJlY3QuXG4gKiBAcGFyYW0gcmVjdCBDbGllbnRSZWN0IHRvIGNoZWNrIGFnYWluc3QuXG4gKiBAcGFyYW0gdGhyZXNob2xkIFRocmVzaG9sZCBhcm91bmQgdGhlIENsaWVudFJlY3QuXG4gKiBAcGFyYW0gcG9pbnRlclggQ29vcmRpbmF0ZXMgYWxvbmcgdGhlIFggYXhpcy5cbiAqIEBwYXJhbSBwb2ludGVyWSBDb29yZGluYXRlcyBhbG9uZyB0aGUgWSBheGlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQb2ludGVyTmVhckNsaWVudFJlY3QocmVjdDogQ2xpZW50UmVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyWDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJZOiBudW1iZXIpOiBib29sZWFuIHtcbiAgY29uc3Qge3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCwgd2lkdGgsIGhlaWdodH0gPSByZWN0O1xuICBjb25zdCB4VGhyZXNob2xkID0gd2lkdGggKiB0aHJlc2hvbGQ7XG4gIGNvbnN0IHlUaHJlc2hvbGQgPSBoZWlnaHQgKiB0aHJlc2hvbGQ7XG5cbiAgcmV0dXJuIHBvaW50ZXJZID4gdG9wIC0geVRocmVzaG9sZCAmJiBwb2ludGVyWSA8IGJvdHRvbSArIHlUaHJlc2hvbGQgJiZcbiAgICAgICAgIHBvaW50ZXJYID4gbGVmdCAtIHhUaHJlc2hvbGQgJiYgcG9pbnRlclggPCByaWdodCArIHhUaHJlc2hvbGQ7XG59XG4iXX0=
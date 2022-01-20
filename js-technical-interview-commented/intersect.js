/*
    https://www.codepile.net/
*/
/*
    Функция принимает на вход два массива, их длина не известна.
    Элементы массива могут иметь любой валидный в JS тип (string, number, boolean, null, undefined, object etc.), 
    массивы не отсортированы.
    Функция должна возвращать:
        - массив элементов, содержащихся одновременно и в первом, и во втором массиве, т.е. их пересечение как множеств
        - пустой массив, если такого пересечения нет.
*/
/*
    Function gets two arrays as arguments, arrays can be of arbitrary length.
    Arrays contain elements of any valid JavaScript type (string, number, boolean, null, undefined, object etc.), 
    arrays are not sorted.
    Function must return:
        - an array of elements, containing both in the first and in the second array, i.e. their intersection as sets.
        - an empty array, if there is no such intersection.
*/

/**
 * Easiest approach is to add one of the arrays to a Set, then iterate over another array and check for duplicates.
 * In this case the complexity in terms of 'Big O' will be (n*log m), where m - arr1.length, n - arr2.length.
 * At first candidate may propose a naive implementation with nested loops.
 * In this case ask about quadratic complexity and it's problems.
 *
 * Candidate may code in any editor by sharing the screen or in a web-based editor as e.g. Codepile.
 */
function intersect(arr1, arr2) {
    const result = [];
    const set = new Set(arr1);
    for (const elem of arr2) {
        if (set.has(elem)) {
            result.push(elem);
        }
    }
    return result;
}

module.exports = intersect;

"use strict";
require("typings-global");
const ansiColors = require("ansi-256-colors");
/**
 * the color translator function
 */
let colorTranslator = (colorArg) => {
    switch (colorArg) {
        case 'black':
            return { r: 0, g: 0, b: 0 };
        case 'blue':
            return { r: 0, g: 1, b: 5 };
        case 'brown':
            return { r: 1, g: 0, b: 0 };
        case 'cyan':
            return { r: 0, g: 4, b: 4 };
        case 'green':
            return { r: 2, g: 5, b: 0 };
        case 'orange':
            return { r: 5, g: 3, b: 0 };
        case 'pink':
            return { r: 5, g: 0, b: 5 };
        case 'red':
            return { r: 5, g: 0, b: 0 };
        case 'white':
            return { r: 5, g: 5, b: 5 };
        default:
            return { r: 5, g: 5, b: 5 };
    }
};
/**
 * colors the font of a string
 */
let coloredFont = (stringArg, colorArg) => {
    let rgbCode = colorTranslator(colorArg);
    return ansiColors.fg.getRgb(rgbCode.r, rgbCode.g, rgbCode.b) + stringArg;
};
/**
 * colors the back of a string
 */
let coloredBackground = (stringArg, colorArg) => {
    let rgbCode = colorTranslator(colorArg);
    return ansiColors.bg.getRgb(rgbCode.r, rgbCode.g, rgbCode.b) + stringArg;
};
/**
 * color a string with xterm
 */
exports.coloredString = (stringArg, colorFontArg, colorBackgroundArg) => {
    let returnString = coloredFont(stringArg, colorFontArg);
    if (colorBackgroundArg) {
        returnString = coloredBackground(returnString, colorBackgroundArg);
    }
    returnString = returnString + ansiColors.reset;
    return returnString;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQXVCO0FBQ3ZCLDhDQUE2QztBQXNCN0M7O0dBRUc7QUFDSCxJQUFJLGVBQWUsR0FBRyxDQUFDLFFBQW9CO0lBQ3ZDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDZixLQUFLLE9BQU87WUFDUixNQUFNLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFBO1FBQzdCLEtBQUssTUFBTTtZQUNQLE1BQU0sQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUE7UUFDN0IsS0FBSyxPQUFPO1lBQ1IsTUFBTSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFHLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQTtRQUM5QixLQUFLLE1BQU07WUFDUCxNQUFNLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFBO1FBQzVCLEtBQUssT0FBTztZQUNSLE1BQU0sQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUE7UUFDN0IsS0FBSyxRQUFRO1lBQ1QsTUFBTSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQTtRQUM3QixLQUFLLE1BQU07WUFDUCxNQUFNLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFBO1FBQzdCLEtBQUssS0FBSztZQUNOLE1BQU0sQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUE7UUFDN0IsS0FBSyxPQUFPO1lBQ1IsTUFBTSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQTtRQUM3QjtZQUNJLE1BQU0sQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUE7SUFDakMsQ0FBQztBQUNMLENBQUMsQ0FBQTtBQUVEOztHQUVHO0FBQ0gsSUFBSSxXQUFXLEdBQUcsQ0FBQyxTQUFpQixFQUFFLFFBQW9CO0lBQ3RELElBQUksT0FBTyxHQUFTLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUM3QyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUE7QUFDNUUsQ0FBQyxDQUFBO0FBRUQ7O0dBRUc7QUFDSCxJQUFJLGlCQUFpQixHQUFHLENBQUMsU0FBaUIsRUFBRSxRQUFvQjtJQUM1RCxJQUFJLE9BQU8sR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDdkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFBO0FBQzVFLENBQUMsQ0FBQTtBQUVEOztHQUVHO0FBQ1EsUUFBQSxhQUFhLEdBQUcsQ0FBQyxTQUFpQixFQUFFLFlBQXdCLEVBQUUsa0JBQStCO0lBQ3BHLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUE7SUFDdkQsRUFBRSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTtJQUN0RSxDQUFDO0lBQ0QsWUFBWSxHQUFHLFlBQVksR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFBO0lBQzlDLE1BQU0sQ0FBQyxZQUFZLENBQUE7QUFDdkIsQ0FBQyxDQUFBIn0=
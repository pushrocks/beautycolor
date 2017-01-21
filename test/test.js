"use strict";
require("typings-test");
const beautycolor = require("../dist/index");
describe('beautycolor', function () {
    it('should produce a blue font', function () {
        console.log(beautycolor.coloredString('this is a blue font, no background', 'blue'));
    });
    it('should produce a red string with green background', function () {
        console.log(beautycolor.coloredString('this is a red font with green background', 'red', 'green'));
    });
    it('should produce different font colors', function () {
        console.log(beautycolor.coloredString('blue', 'blue'), beautycolor.coloredString('brown', 'brown'), beautycolor.coloredString('red', 'red'), beautycolor.coloredString('orange', 'orange'), beautycolor.coloredString('green', 'green'), beautycolor.coloredString('pink', 'pink'), beautycolor.coloredString('cyan', 'cyan'));
    });
    it('should produce different baclground colors', function () {
        console.log(beautycolor.coloredString('blue', 'white', 'blue'), beautycolor.coloredString('brown', 'white', 'brown'), beautycolor.coloredString('red', 'white', 'red'), beautycolor.coloredString('orange', 'white', 'orange'), beautycolor.coloredString('green', 'white', 'green'), beautycolor.coloredString('pink', 'white', 'pink'), beautycolor.coloredString('cyan', 'white', 'cyan'));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUVyQiw2Q0FBNEM7QUFFNUMsUUFBUSxDQUFDLGFBQWEsRUFBRTtJQUNwQixFQUFFLENBQUMsNEJBQTRCLEVBQUU7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLG9DQUFvQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDeEYsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsbURBQW1ELEVBQUU7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLDBDQUEwQyxFQUFFLEtBQUssRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ3JHLENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLHNDQUFzQyxFQUFFO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQ1AsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUMsTUFBTSxDQUFDLEVBQ3hDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxFQUMxQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsRUFDdEMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUMsUUFBUSxDQUFDLEVBQzVDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUMzQyxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFDekMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQzVDLENBQUE7SUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRTtRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUNQLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFDbEQsV0FBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUNwRCxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQ2hELFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFDdEQsV0FBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUNwRCxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQ2xELFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FDckQsQ0FBQTtJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==
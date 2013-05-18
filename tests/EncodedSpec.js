﻿var XLSX = require('../');

describe('חישוב_נקודות_זיכוי.xlsx', function () {
	it('should be able to open workbook', function () {
		var xlsx = XLSX.readFile('tests/files/חישוב_נקודות_זיכוי.xlsx');
		expect(xlsx).toBeTruthy();
		expect(xlsx).toEqual(jasmine.any(Object));
	});

	it('should define all api properties correctly', function () {
		var xlsx = XLSX.readFile('tests/files/חישוב_נקודות_זיכוי.xlsx');
		expect(xlsx.Workbook).toEqual(jasmine.any(Object));
		expect(xlsx.Props).toBeDefined();
		expect(xlsx.Deps).toBeDefined();
		expect(xlsx.Sheets).toEqual(jasmine.any(Object));
		expect(xlsx.SheetNames).toEqual(jasmine.any(Array));
		expect(xlsx.Strings).toBeDefined();
		expect(xlsx.Styles).toBeDefined();
	});
});
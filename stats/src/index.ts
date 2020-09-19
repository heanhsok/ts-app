import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

/*

import { CSVFileReader } from './CSVFileReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reporters/ConsoleReport';
import { HtmlReport } from './reporters/HtmlReport';

// create an obj that satisfies 'DataReader' interface
const csvFileReader = new CSVFileReader('./data/football.csv');
// create an instance of MatchReader 
// and pass in sth that satisfies 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const team = 'Liverpool';

const summary = new Summary(
	new WinsAnalysis(team),
	new ConsoleReport()
);
summary.buildAndPrintReport(matchReader.matches);

const summary1 = new Summary(
	new WinsAnalysis(team),
	new HtmlReport()
);
summary1.buildAndPrintReport(matchReader.matches);

*/

const matchReader = MatchReader.fromCSV('./data/football.csv');
matchReader.load();

const team: string = 'Arsenal';
const summary = Summary.winsAnalysisWithHtmlReport(team);
summary.buildAndPrintReport(matchReader.matches);


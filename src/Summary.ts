import { MatchData } from './MatchData'
import { WinsAnaysis } from './analyzers/WinsAnaysis'
import { HtmlReport } from './reportTargets/HtmlReport'

export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnaysis(team), new HtmlReport())
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches)
    this.outputTarget.print(report)
  }
}

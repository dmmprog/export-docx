/**
 * Docx - https://docx.js.org/#/
 */
import { Injectable } from '@angular/core';

//import * as fs from 'file-saver';
//import { saveAs } from 'file-saver';
import { FileSaverService } from 'ngx-filesaver';
import { Document, TableCell, Paragraph, TextRun, TableRow, Packer, AlignmentType, Table } from 'docx';

@Injectable()
export class DocxService {

  constructor(private fileSaver: FileSaverService) { }

  /**
     * Used to export the file into a .docx file   
     * @param doc 
     */
    exportDoc(doc: Document, title: string) {

      Packer.toBlob(doc).then(b => {

          if (b) {              
            this.fileSaver.save(b, title + '.docx');
              alert('Documento gerado com sucesso.');
          } else {
              alert('Erro ao gerar documento.');
          }
      });
  }

  //#region Métodos  
  getParagraph(indentLeft: number, indentRight: number, text: string): Paragraph {
      let indent = { left: indentLeft, right: indentRight };
      return new Paragraph({ indent: indent, children: [new TextRun(text)] });
  }

  /**
   * Retorna parágrafo com letras maiúsculas, sublinhado e negrito
   * @param title 
   */
  getParagraphTitleUnderline(title: string): Paragraph {
      return new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: title.toUpperCase(), bold: true, size: 20, underline: {}, })]
      });
  }

  getDateString(): string {
      return new Date().toLocaleDateString();
  }
  //#endregion

  //#region Tabelas
  /**
   * Retorna tabela com uma linha e duas células
   * @param firstCell - Texto da primeira célula
   * @param secondCell - Texto da segunda célula
   * @param indentRight - Tamanho da célula a direita do texto
   * @param bold - true ou false
   */
  getTableSubTitulo(firstCell: string, secondCell: string, indentRight: number, bold: any): Table {

      const table = new Table({
          rows: [
              this.getTableRow(firstCell, secondCell, indentRight, true)
          ],
      });
      return table;
  }

  /**
   * Retorna tabela com uma linha e uma coluna
   * @param cell - texto da célula
   */
  getTableOneCell(cell: string): Table {

      const table = new Table({
          rows: [
              new TableRow({
                  children: [
                      new TableCell({
                          children: [
                              new Paragraph({ indent: { right: 1000 }, children: [new TextRun({ text: cell, bold: true })] })
                          ],
                      })
                  ],
              }),
          ],
      });
      return table;
  }

  /**
   * Retorn linha de tabelas com duas colunas
   * @param firstCell 
   * @param secondCell 
   * @param indentRight 
   * @param bold 
   */
  getTableRow(firstCell: string, secondCell: string, indentRight: number, bold: any): TableRow {

      const tableRow = new TableRow({
          children: [
              this.getTableCell(firstCell, indentRight, bold),
              this.getTableCell(secondCell, indentRight, bold)
          ],
      });
      return tableRow;
  }

  /**
   * Retorna célula/coluna de tabela
   * @param textCell 
   * @param indentRight 
   * @param bold 
   */
  getTableCell(textCell: string, indentRight: number, bold: any): TableCell {

      const tableCell = new TableCell({
          children: [
              new Paragraph({
                  indent: { right: indentRight },
                  children: [new TextRun({ text: textCell, bold: bold })]
              })
          ]
      });
      return tableCell;
  }
  //#endregion   
}

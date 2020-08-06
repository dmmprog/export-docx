import { Component, OnInit } from '@angular/core';
import { Document, TableRow, Table, TableCell } from 'docx';
import { DocxService } from '../services/docx.service';



@Component({
  selector: 'app-export-doc',
  templateUrl: './export-doc.component.html',
  styleUrls: ['./export-doc.component.css']
})
export class ExportDocComponent implements OnInit {

  constructor(private docxService: DocxService) { }

  title = 'Arquivo Word';

  ngOnInit(): void {    
  }

   //#region Métodos
   initDoc() { 
      this.generateWord();
   }

    public generateWord() {
      const doc = new Document();
  
      doc.addSection({
        children: [
          this.docxService.getParagraphTitleUnderline(this.title),
          this.docxService.getParagraph(0, 0, ''),/*Parágrafo vazio para pular uma linha*/
          this.getTableHeader(),
          this.docxService.getParagraph(0, 0, ''),
          this.docxService.getParagraph(0, 0, 'Item Primiera linha: ' + 'Item 01'),
          this.docxService.getParagraph(0, 0, 'Segunda linha: ' + 'Item 02'),          
  
          this.docxService.getParagraph(0, 0, ''),
          this.docxService.getTableSubTitulo('Nome: ' + 'Lirosmalha Alaustre', 'CPF: ' + '123.456.789-00', 1000, true),
          this.docxService.getParagraph(0, 0, ''),
          this.docxService.getParagraph(0, 0, 'Data de Nascimento: ' + '10/12/1980'),
          this.docxService.getParagraph(0, 0, 'Renda: R$ ' + '666,00'), 
  
          this.docxService.getParagraph(0, 0, ''),
          this.docxService.getParagraph(0, 0, 'Observações:'),
          this.getTableObs()            
        ]
      });
      this.docxService.exportDoc(doc, this.title);
    }
    //#endregion

     //#region Tabelas
  getTableHeader(): Table {
    const table = new Table({
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [this.docxService.getParagraph(0, 1000, "Data: " + new Date().toDateString())],
            }),
            new TableCell({
              children: [this.docxService.getParagraph(0, 1000, "Tipo: " + 'Teste')],
            }),
            new TableCell({
              children: [this.docxService.getParagraph(0, 1000, "Nº: " + "1")],
            })
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [this.docxService.getParagraph(0, 1000, 'Setor: Novo ')],
            }),
            new TableCell({
              children: [this.docxService.getParagraph(0, 1000, 'Forma: ' + "Operação")],
            }),
            new TableCell({
              children: [this.docxService.getParagraph(0, 1000, 'Usuário: ' + "New")],
            }),
          ],
        }),
      ],
    });
    return table;
  }

  getTableObs(): Table {
    const table = new Table({
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [this.docxService.getParagraph(0, 6000, '      ')],
            })
          ],
        }),
      ]
    });
    return table;
  }
  //#endregion     

}

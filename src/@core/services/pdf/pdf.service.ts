import { Injectable } from '@angular/core';
import { jsPDF } from "jspdf";


@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  CertificadoPago() {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    doc.setProperties({
      title: "CERTIFICADO FONA",
      subject: "https://github.com/elpoloxrodriguez",
      author: "SISTEMA  RECOSUP",
      keywords: "generated, javascript, web 2.0, ajax",
      creator: "CAP. ANDRÉS RICARDO RODRÍGUEZ DURÁN",
    });

    doc.addImage('assets/images/pdf/fona.png', "PNG", 10, 10, 20, 25);
    doc.addImage('assets/images/pdf/sunad.png', "PNG", 180, 10, 20, 25);
    // doc.addImage('assets/certificados/cacfr.png', "PNG", 40, 60, 120, 120);
  

    doc.setFontSize(9);
    doc.setFont(undefined, "bold");
    doc.text(
      "REPÚBLICA BOLIVARIANA DE VENEZUELA",
      pageWidth / 2,
      pageHeight - 280,
      { align: "center" }
    );
    doc.text(
      "MINISTERIO DEL PODER POPULAR PARA RELACIONES INTERIORES, JUSTICIA Y PAZ",
      pageWidth / 2,
      pageHeight - 275,
      { align: "center" }
    );
    doc.text(
      "SUPERINTENDENCIA NACIONAL ANTIDROGAS",
      pageWidth / 2,
      pageHeight - 270,
      { align: "center" }
    );
    doc.text(
      "FONDO NACIONAL ANTIDROGAS",
      pageWidth / 2,
      pageHeight - 265,
      { align: "center" }
    );
    doc.setFont(undefined, "");


    doc.setFontSize(10);
    doc.setFont(undefined, "bold");
    doc.text("N°: CDA-FONA-RECOSUP-2-997361", pageWidth  -40 , pageHeight - 250, { align: 'center' });


    doc.setFontSize(14);
    doc.setFont(undefined, "bold");
    doc.text("CERTIFICADO DE LA DECLARACIÓN DEL APORTE (Art.32) A TRAVÉS DEL SISTEMA DE REGISTRO Y CONTROL DE SUJETOS PASIVOS (RECOSUP).", pageWidth / 2, pageHeight - 230, { maxWidth: 150, align: "center" });


    doc.setFont(undefined, "");

    doc.setFontSize(14);
    doc.text("El Director Ejecutivo del Fondo Nacional Antidrogas (FONA), conforme a lo dispuesto en el Artículo 148 del Código Orgánico Tributario, certifica la recepción de la DECLARACIÓN del contribuyente PETROQUIMICA DE VENEZUELA, S.A. (PEQUIVEN) RIF G200001070, realizada en fecha 21/02/2022, por la cantidad de Bs 186.395.183,22, ante el Fondo Nacional Antidrogas, correspondiente al período desde 01/01/2021 hasta el 31/12/2021.",
      14,
      110,
      { maxWidth: 180, align: "justify" }
    );

    doc.setFontSize(12);
    doc.text("HECTOR JESUS BRITO ALVARADO",105,195,{ align: "center" });
    doc.setFontSize(10);
    doc.text("Director Ejecutivo (FONA)",105,200, { align: "center" });
    doc.setFontSize(9);
    doc.text("Resolución Ministerial Nº 0155 G.O.Nº 42.233 de fecha 14/10/2021",105,205, { align: "center" });

    doc.setFontSize(9);
    doc.setFont(undefined, "bold");
    doc.text("Nota:",
      14,
      240,
      { maxWidth: 180, align: "justify" }
    );
  doc.setFontSize(9);
  doc.setFont(undefined, "");
  doc.text("Debe imprimir el presente certificado como comprobante de la declaración a través del Sistema de Registro y Control de Sujetos Pasivos (RECOSUP). La emisión de este comprobante de declaración no certifica la recepción del pago en las cuentas recaudadoras de esta Administración Tributaria.",
    14,
    245,
    { maxWidth: 180, align: "justify" }
  );


  doc.setFontSize(9);
  doc.setFont(undefined, "bold");
  doc.text("FORMA: FONA-RAF-CDA-15/002",
    14,
    265,
    { maxWidth: 180, align: "justify" }
  );


    // doc.save("a4.pdf");
    // doc.autoPrint();
    doc.output("dataurlnewwindow", { filename: 'Cerfificado.pdf' });
  }


}

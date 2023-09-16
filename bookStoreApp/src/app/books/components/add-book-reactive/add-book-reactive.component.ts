import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.scss'],
})
export class AddBookReactiveComponent implements OnInit {
  constructor(
    private _bookService: BookService,
    private _formBuilder: FormBuilder
  ) {}

  public titleErrorMessage: string;

  prices: any[] = [
    { value: '100', viewValue: '100' },
    { value: '200', viewValue: '200' },
    { value: '300', viewValue: '300' },
    { value: '600', viewValue: '600' },
    { value: '1200', viewValue: '1200' },
    { value: '2400', viewValue: '2400' },
  ];

  currencies: any[] = [
    { value: 'USD', viewValue: 'US Doller' },
    { value: 'GBP', viewValue: 'Pound' },
    { value: 'INR', viewValue: 'Intian Rupee' },
    { value: 'BDT', viewValue: 'Bangladeshi Taka' },
  ];

  public addBookForm: FormGroup;

  ngOnInit(): void {
    this.initForm();

    const titleControl = this.addBookForm.get('title');
    titleControl?.valueChanges.subscribe((x) => {
      this.validateTitleControl(titleControl);
    });

    const formatTypeControl = this.addBookForm.get('formatType');
    formatTypeControl?.valueChanges.subscribe((x) => {
      this.formatTypeChange(x);
    });
  }

  private initForm(): void {
    this.addBookForm = this._formBuilder.group({
      title: ['Default Title', [Validators.required, Validators.minLength(10)]],
      // author: '',
      totalPages: '',
      price: this._formBuilder.group({
        currency: '',
        value: '',
      }),
      publishedOn: '',
      isPublished: '',
      formatType: '',
      pdfFormat: '',
      docFormat: '',
      authors: this._formBuilder.array([this.getAuthorControl()]),
    });
  }

  private getAuthorControl(): FormGroup {
    return this._formBuilder.group({
      fullName: '',
      address:''
    });
  }

  public get authors() {
    return <FormArray>this.addBookForm.get('authors');
  }

  public addMoreAuthor(): void {
    this.authors.push(this.getAuthorControl());
  }

  public removeAuthor(i: number): void {
    this.authors.removeAt(i);
  }

  saveBook(): void {
    if (this.addBookForm.valid) {
      this._bookService.addBook(this.addBookForm.value)
      .subscribe( addBook => {
        console.log(addBook);
      });
    } else {
      alert('form Invalid');
    }
  }

  private validateTitleControl(titleControl: AbstractControl): void {
    this.titleErrorMessage = '';
    if (titleControl.errors && (titleControl.touched || titleControl.dirty)) {
      if (titleControl.errors?.['required']) {
        this.titleErrorMessage = 'This is a required field';
      } else if (titleControl.errors?.['minlength']) {
        this.titleErrorMessage =
          'Minimum length is ' +
          titleControl.errors?.['minlength']?.requiredLength;
      }
    }
  }

  private formatTypeChange(formatType: string): void {
    const pdfControl = this.addBookForm.get('pdfFormat');
    const docControl = this.addBookForm.get('docFormat');
    if (formatType === 'pdf') {
      pdfControl?.addValidators(Validators.required);
      docControl?.clearValidators();
    } else if (formatType === 'doc') {
      docControl?.addValidators(Validators.required);
      pdfControl?.clearValidators();
    } else {
    }

    pdfControl?.updateValueAndValidity();
    docControl?.updateValueAndValidity();
  }
}

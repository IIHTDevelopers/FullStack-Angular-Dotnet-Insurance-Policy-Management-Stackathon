import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { InsurancePolicyComponent } from './components/insurance-policy-management/insurance-policy-management.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent, InsurancePolicyComponent],
            imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('boundary', () => {
        it('should be created', () => {
            expect(component).toBeTruthy();
        });

        it('should have Insurance Policy Management heading in h1', () => {
            const headingElement = fixture.nativeElement.querySelector('h1');
            expect(headingElement.textContent).toContain('Insurance Policy Management');
        });
    });
});
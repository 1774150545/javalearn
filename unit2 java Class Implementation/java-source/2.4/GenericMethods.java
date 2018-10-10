
public class GenericMethods {
	public <T> void f(T x){
		System.out.println(x.toString());
	}
	public static void main(String[] args){
		genericMethods gm = new GenericMethods();
		gm.f("Hello");
		gm.f(new Product("coffee",27,"34"));
		gm.f(new Point2D(23,45));
	}

}

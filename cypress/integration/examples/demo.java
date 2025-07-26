class demo{
    public static void main(String[] args){
        System.out.println("Hello bahi");
        float pAmount = 120000, roi = 12, period = 8;
        for(int i = 0;i<period*12;i++){
            // pAmount = pAmount + grossAmount;
            float amount = (pAmount*(roi/100))/12;
            pAmount = pAmount+amount;
            System.out.println(amount);
        }
        System.out.println(pAmount-120000);
        System.out.println(81560.9025+280000-120000);
    }
}
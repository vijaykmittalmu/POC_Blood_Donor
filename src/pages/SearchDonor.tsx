import { FC } from "react";

interface SearchDonorProps {
  title: string;
}

const SearchDonor: FC<SearchDonorProps> = ({ title = "" }) => {
  return (
    <section>
      <form>
        <section className="inline-wrapper">
          <select id="blood-group" name="blood-group">
            <option value="A+">Select blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </section>

        <section className="inline-wrapper">
          <select id="blood-group" name="blood-group">
            <option value="A+">Select blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </section>

        <section className="inline-wrapper">
          <select id="blood-group" name="blood-group">
            <option value="A+">Select blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </section>

        <section className="inline-wrapper">
          <select id="blood-group" name="blood-group">
            <option value="A+">Select blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </section>
        <section className="button-center">
          <button type="submit">Submit</button>
        </section>
      </form>
    </section>
  );
};

export default SearchDonor;
